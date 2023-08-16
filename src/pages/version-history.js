import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../layout/seo';
import { getDisplayDate } from '../_common/utils';
import { AppNameLong, Urls } from '../_common/_constants';
import IssueListControl from '../components/IssueListControl';
import messages from '../../static/messages.json';
import knownBugs from '../../static/known-issues.json';

const { updates_info } = messages;

function getDescription(desc, i) {
    let id, text = desc;

    if (typeof desc === "object") {
        id = desc.id;
        text = desc.text;
    }

    return <li key={i}>{!!id && <a href={"https://github.com/shridhar-tl/jira-assistant/issues/" + id} target="_blank" rel="noopener noreferrer">#{id} - </a>}{text}</li>
}

function renderUpdatesBlock(m, i) {
    const title = m.title || "Enhancements and bug fixes";

    return (<div className="border-bottom py-3" key={i}>
        <h5 className="my-2 title"><span className="text-sm text-muted">{getDisplayDate(m.date)}</span>: v{m.version} - {title}</h5>
        <ul className="desc">{m.whatsnew.map(getDescription)}</ul>
    </div>);
}

function VersionHistory(props) {
    return (
        <Layout>
            <div className="container">
                <br /><br /><br /><br /><br />
                <div>
                    <h2 id="known-bugs">Known bugs</h2>
                    <p>Following are some of the known issues in {AppNameLong}. To see the detailed list of all the open and closed issues refer to the <a href={Urls.issueTracker} target="_blank" rel="noopener noreferrer">GitHub issues</a></p>
                    {knownBugs.map((m, i) => <div key={i} className="border-bottom py-3">
                        <span className="text-sm text-muted">{m.date}</span>
                        <h5 className="my-2">{m.title}</h5>
                        <ul className="desc">{m.description.map(getDescription)}</ul>
                    </div>)}
                </div>
                <div>
                    <h2 id="latest-updates">Recent and upcoming changes</h2>
                    <p>Following are the list of changes done in each version of {AppNameLong}.</p>
                    {updates_info.map(renderUpdatesBlock)}
                </div>
                <IssueListControl data={props.data} />
            </div>
        </Layout>
    );
}

export default VersionHistory;

export const Head = () => (<Seo title="Version history and known bugs" />);

export const pageQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          id
          slug
        }
      }
    }
  }
}
`;