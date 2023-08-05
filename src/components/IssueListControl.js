import React from 'react';
import { loadIssuesListFromGitHub } from '../_common/common';

async function loadIssuesList() {
    const { issues } = await loadIssuesListFromGitHub();
    return issues.map(issue => ({ id: issue.number, url: `/issue-tracker/${encodeURIComponent(issue.title)}/${issue.number}` }));
}

async function IssueListControl() {
    const issues = await loadIssuesList();

    return (
        <div style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
            {issues.map((issue, i) => <a key={i} href={issue.url}>{issue.id}</a>)}
        </div>
    );
}

export default IssueListControl;