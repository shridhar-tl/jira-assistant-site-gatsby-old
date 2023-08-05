import AjaxService from "../_services/AjaxService";
import { Apis } from "./_constants";

export async function loadIssuesListFromGitHub() {
    let { list, expires } = {};
    let updated = false;
    console.log(list ? "IssueList: Cache exists" : "IssueList: Cache does not exists");
    try {
        if (!list || expires < new Date().getTime()) {
            console.log("IssueList: Fetching fresh data");
            const $ajax = new AjaxService();
            let page = 1;
            let hasMorePages = true;
            while (hasMorePages && (!list || list.length < 800)) {
                const response = await $ajax.get(Apis.issueListApi + page);

                if (page > 1) {
                    list = [...list, ...response.filter(i => !i.pull_request)];
                } else {
                    list = response.filter(i => !i.pull_request);
                }

                page++;

                hasMorePages = (response.data?.length >= 100); // 100 is the count set for max recordin url. if it is modified, then here also 100 should be modified
            }
            console.log(`IssueList: Got ${list.length} items`);
            expires = new Date().getTime() + (24 * 60 * 60 * 1000); // Expire this data after 1 day

            updated = true;
        }
    } catch (err) {
        console.error(`Error fetching IssueList: Message:- ${err.message}; Details:- ${JSON.stringify(err)}`);
    }

    return { issues: list, updated };
}

const cacheOptions = {
    next: {
        revalidate: 24 * 60 * 60
    }
};

export async function loadIssueFromGitHub(id) {
    try {
        const $ajax = new AjaxService();
        const issue = await (await fetch(Apis.issueApi + id, cacheOptions)).json();

        if (!issue.commentsList) {
            issue.commentsList = await (await fetch($ajax.prepareUrl(Apis.issueCommentsApi, [id]), cacheOptions)).json();
        }

        return issue;
    } catch (err) {
        console.error(`Error fetching Issue: Message:- ${err.message}; Details:- ${JSON.stringify(err)}`);
    }
}