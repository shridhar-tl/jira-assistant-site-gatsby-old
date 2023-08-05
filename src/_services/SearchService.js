import { Apis } from "../_common/_constants";
import AjaxService from "./AjaxService";

class SearchService {
    constructor() {
        this.$ajax = new AjaxService();
    }

    async search(query) {
        const apiResult = await this.$ajax.get(Apis.searchApiUrl, [query]);

        const {
            searchInformation: {
                formattedSearchTime: timespent },
            items = [],
            spelling: {
                correctedQuery: correction
            } = {}
        } = apiResult;
        const results = items.map(({ title, htmlTitle, link, displayLink, htmlSnippet }) => ({ title, htmlTitle, link: getRelativeUrl(link), displayLink, htmlSnippet }));
        return { timespent, results, correction };
    }
}

export default SearchService;

function getRelativeUrl(url) {
    if (!url) { return url; }

    try {
        const { pathname, search } = new URL(url);
        return pathname + search;
    } catch {
        return url;
    }
}