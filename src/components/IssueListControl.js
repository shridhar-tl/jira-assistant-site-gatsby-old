import React from 'react';
import * as helpers from '../_common/issues-list';

function IssueListControl(props) {
    const issues = helpers.formatIssuesList(props);

    return (
        <div style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
            {issues.map((issue, i) => <a key={i} href={issue.path}>{issue.id}</a>)}
        </div>
    );
}

export default IssueListControl;
