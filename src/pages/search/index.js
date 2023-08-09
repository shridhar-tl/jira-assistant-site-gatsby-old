import React from 'react';
import { navigate } from 'gatsby';
import { AppNameLong, Urls } from '../../_common/_constants';
import AnalyticsService, { EventCategory } from '../../_services/AnalyticsService';
import Layout from '../../layout';
import Seo from '../../layout/seo';
import Link from '../../components/Link';
import TextBox from '../../components/TextBox';
import SearchService from '../../_services/SearchService';
import './Search.scss';
import Loader from '../../components/Loader';

function Search(props) {
    const ref = React.useRef();

    const searchQuery = props.params?.query?.trim() || "";
    const [searchText, setSearchText] = React.useState(searchQuery);
    const [isLoading, setLoading] = React.useState(!!searchText);
    const [searchState, setSearchState] = React.useState({});
    ref.searchState = searchState;
    /*
        React.useEffect(() => {
            if (searchText) {
                initiateSearch(searchText).then(result => {
                    setSearchState(result);
                    setLoading(false);
                });
            }
            // $analytics.trackPageView("/search"); // ToDo:
        }, []);*/

    React.useEffect(() => {
        // ToDo:
        //$analytics.trackPageView("/search"); // ToDo

        setSearchText(searchQuery);
        if (searchQuery && searchQuery !== ref.searchState.queryText) {
            setLoading(true);
            initiateSearch(searchQuery).then(result => {
                setSearchState(result);
                setLoading(false);
            });
        }
    }, [searchQuery]);

    const search = React.useCallback(query => {
        const newSearchText = (typeof query === "string" ? query : searchText)?.trim();

        if (newSearchText) {
            navigate(`/search/${encodeURIComponent(newSearchText)}`);
        }
    }, [searchText]);

    const { queryText, correction, timespent, results, quotaExceeded, unknownError } = searchState;

    const applyCorrection = () => search(correction);

    return (
        <Layout>
            <div className="container search-page">
                <br /><br /><br /><br /><br /><br />
                <h1>Search {AppNameLong}</h1>
                <div className="col-l-12"><TextBox className="search-text" value={searchText} placeholder="search for a feature, answer or a settings in Jira Assistant"
                    onChange={setSearchText} onEnterKey={search} />
                    <span className="fa fa-search" onClick={search} /></div>
                {quotaExceeded && <div className="quota-exceeded">Search functionality is not available anymore for today.
                    You can use it tomorrow. Sorry for the inconvenience caused.
                    For now you can refer our <Link to="/features">features list</Link> or <Link to="/faq">faq</Link> section to get your answer.
                </div>}
                {!quotaExceeded && unknownError && <div className="unknown-error">
                    An unknown error occurred while trying to search with the given keyword. You can try search with a different keyword or
                    for now you can refer our <Link to="/features">features list</Link> or <Link to="/faq">faq</Link> section to get your answer.
                </div>}
                {isLoading && <div className="search-loader"><Loader /></div>}
                {!isLoading && results && <div className="search-info">About {results?.length} results ({timespent} seconds)</div>}
                {!isLoading && results && <div className="search-keyword">Showing results for "{queryText}"</div>}
                {!isLoading && results && correction && <div className="search-instead">Search instead for <span onClick={applyCorrection}>{correction}</span></div>}
                {!isLoading && results && <div className="search-results">
                    {results.map((r, i) => <div key={i} className="search-result">
                        {getTitleElement(r)}
                        {/*<Link to={mapIssuesLinkToGitHub(r.link)} className="link"> {r.displayLink}</Link>*/}
                        <span className="desc" dangerouslySetInnerHTML={{ __html: r.htmlSnippet }} />
                    </div>)}
                    {!results.length && <div className="no-results">No results found for the term "{queryText}". Try to search with a feature or a settings in {AppNameLong}</div>}
                </div>}
                <br /><br /><br /><br />
            </div>
        </Layout>
    );
}

export default Search;

export const Head = () => (<Seo title="Search" />);

function getTitleElement(r) {
    if (r.link.indexOf('/issue-tracker/') > -1) {
        return <a href={mapIssuesLinkToGitHub(r.link)} className="title" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: decodeURIComponent(r.htmlTitle) }} />
    } else {
        return <Link to={r.link} className="title">{fixSearchTitle(r.title)}</Link>
    }
}

function mapIssuesLinkToGitHub(url) {
    if (url.indexOf('/issue-tracker/') > -1) {
        const issueKey = parseInt(url.substring(url.lastIndexOf('/') + 1));
        if (issueKey) {
            return Urls.issueTracker + '/' + issueKey;
        }
    }

    return url;
}

function fixSearchTitle(title) {
    return decodeURIComponent(title.replace('- [Jira Assistant]', ''));
}


const initiateSearch = async (searchText) => {
    if (searchText) {
        const $analytics = new AnalyticsService();
        try {
            const $search = new SearchService();
            const res = await $search.search(searchText);
            const { timespent, results, correction } = res;

            const action = results?.length ? "Search:Successful" : "Search:No Results";
            $analytics.trackEvent(action, EventCategory.UserSearch, searchText, results.length);

            return { queryText: searchText, correction, timespent, results, isLoading: false, unknownError: false };
        }
        catch (err) {
            $analytics.trackError(err, false);
            console.error('Search Error:-', err);

            let action = "Search:Failed-";

            $analytics.trackEvent(action, EventCategory.UserSearch, searchText);

            if (~err?.toString().indexOf("429")) {
                action += "429";
                return { quotaExceeded: true, queryText: searchText, correction: "", results: null, isLoading: false, unknownError: false };
            }
            else {
                action += "unknown";
                return { queryText: searchText, correction: "", results: null, isLoading: false, unknownError: true };
            }
        }
    }
}