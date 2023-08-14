import React from 'react';
import Seo from '../../../../layout/seo';
import FeaturesLayout from '../../../../layout/FeaturesLayout';

const functionInfo = [
    {
        name: 'getDateRange',
        info: 'Returns an array of dates between a given date range',
        params: {
            startDate: { type: 'Date', info: 'Start date' },
            endDate: { type: 'Date', info: 'End date' }
        },
        returnType: 'Array<Date>',
        returnInfo: 'Array of dates'
    },
    {
        name: 'isBetween',
        info: 'Returns a boolean value indicating if the given value falls between the from and to (inclusive) date range',
        params: {
            value: { type: 'Date', info: 'Date to be compared with' },
            fromDate: { type: 'Date', info: 'Start date' },
            toDate: { type: 'Date', info: 'End date' }
        },
        returnType: 'boolean',
        returnInfo: 'true or false'
    },
    {
        name: 'formatStr',
        info: 'Formats the string by replacing the placeholders with the value being passed',
        params: {
            value: { type: 'string', info: 'The string to be formated.' },
            args: { type: 'Array<string>', info: 'An array of string to be replaced' }
        },
        returnType: 'string',
        returnInfo: 'A new formatted string'
    },
    {
        name: 'numPad',
        info: 'Returns a string representing the number padded with 0\'s to match the given size',
        params: {
            num: { type: 'int', info: 'The number to be padded with 0\'s' },
            size: { type: 'int', info: 'The minimum length of the string to be returned.' }
        },
        returnType: 'string',
        returnInfo: 'A string representing the number padded with 0\'s to match the given size'
    },
    {
        name: 'httpGet',
        info: 'Runs a Http GET request on a given url and returns the response from server as JSON Object',
        async: true,
        params: {
            url: { type: 'string', info: 'The http request url' },
            params: { type: 'object', info: 'The parameters to be passed as query string', optional: true },
            headers: { type: 'object', info: 'Key value pair of headers to be sent for request', optional: true }
        },
        returnType: 'object',
        returnInfo: 'A response object returned by the server against http request'
    },
    {
        name: 'httpPost',
        info: 'Runs a Http POST request on a given url and returns the response from server as JSON Object',
        async: true,
        params: {
            url: { type: 'string', info: 'The http request url' },
            params: { type: 'object', info: 'The data to be passed in request body', optional: true },
            headers: { type: 'object', info: 'Key value pair of headers to be sent for request', optional: true }
        },
        returnType: 'object',
        returnInfo: 'A response object returned by the server against http request'
    },
    {
        name: 'getUsersFromGroup',
        info: 'Returns the list of users in the given groups. This can be used along with Parameters of type user groups. The result would be primarily useful in JQL for fetching data',
        params: {
            group: { type: 'UserGroup', info: 'The user group object selected by user in parameters' }
        },
        returnType: 'Array<string>',
        returnInfo: 'An array containing the list of users'
    },
    {
        name: 'getJiraIssueUrl',
        info: 'Returns Jira issue url based on issue key. This can be used to launch browser tab when clicking on Issue key',
        params: {
            jiraIssueKey: { type: 'string', info: 'Jira issue key' }
        },
        returnType: 'string',
        returnInfo: 'Returns the Jira issue url'
    },
    {
        name: 'getUserProfileUrl',
        info: 'Returns Jira user profile url based on user name',
        params: {
            userName: { type: 'string', info: 'User name provided by Jira' }
        },
        returnType: 'string',
        returnInfo: 'Returns the Jira user profile url'
    },
    {
        name: 'getTicketDetails',
        info: 'Returns Jira issue details based on the keys provided. Optionally list of fields to be returned by Jira can be provided',
        async: true,
        params: {
            ticketsList: { type: 'Array<string>', info: 'List of Jira issue keys' },
            fields: { type: 'Array<string>', info: 'List of Jira issue fields to be returned', optional: true }
        },
        returnType: 'Array<object>',
        returnInfo: 'Returns list of Jira issue details from Jira'
    },
    {
        name: 'executeJQL',
        info: 'Execute the JQL agains Jira and returns the result provided by Jira. Optionally list of fields can be passed to request for specific fields from Jira',
        async: true,
        params: {
            jql: { type: 'string', info: 'Valid JQL to be executed in Jira' },
            fields: { type: 'Array<string>', info: 'List of fields to be returned by Jira' }
        },
        returnType: 'Array<object>',
        returnInfo: 'Raw result returned by Jira based on executed JQL'
    },
    {
        name: 'getRapidSprintList',
        info: 'Returns the list of sprints based on rapid board id',
        async: true,
        params: {
            rapidIds: { type: 'Array<int>', info: 'List of rapid board id\'s' }
        },
        returnType: 'Array<object>',
        returnInfo: 'Returns list of sprints'
    },
    {
        name: 'getProjectSprintList',
        info: 'Returns the list of sprints based on project id provided',
        async: true,
        params: {
            projects: { type: 'Array<int>', info: 'List of project id\'s' }
        },
        returnType: 'Array<object>',
        returnInfo: 'Returns list of sprints'
    },
    {
        name: 'getRapidSprintDetails',
        info: 'Return detailed information about the sprint including the list of stories added and removed from sprint along with current status of the stories.',
        async: true,
        params: {
            rapidViewId: { type: 'int', info: 'Rapid view board id' },
            sprintId: { type: 'string', info: 'Sprint id' }
        },
        returnType: 'object',
        returnInfo: 'Sprint details with list of stories along with status and other details'
    },
    {
        name: 'searchUsers',
        info: 'Search for the users matching a term and returns the top 10 paginated users',
        async: true,
        params: {
            text: { type: 'string', info: 'Search term to be used' },
            maxResult: { type: 'int', info: 'Maximum number of users to be returned', defValue: 10, optional: true },
            startAt: { type: 'int', info: 'Page number', defValue: 0, optional: true }
        },
        returnType: 'Array<object>',
        returnInfo: 'Returns the list of users primarily useful for Autocomplete suggestions'
    },
    {
        name: 'addWorklog',
        info: 'Opens add worklog popup letting the user to add worklog on a specific ticket',
        params: {
            worklog: { type: 'Worklog', info: 'Worklog details like ticketNo, startTime, timeSpent,allowOverride, etc. can be passed which would be prefilled in Add Worklog dialog' }
        },
        returnType: null,
        returnInfo: 'No data is returned'
    },
    {
        name: 'getWorklogs',
        info: 'Returns the list of worklog from Jira on a particular ticket',
        async: true,
        params: {
            jiraKey: { type: 'string', info: 'Jira issue key for which worklog has to be pulled' }
        },
        returnType: 'Array<object>',
        returnInfo: 'Returns the list of worklog details from Jira'
    },
    {
        name: 'bookmarkTicket',
        info: 'Bookmark the provided ticket in Jira Assistant for quick reference',
        async: true,
        params: {
            jiraKey: { type: 'string', info: 'Jira issue key to be bookmarked' }
        },
        returnType: null,
        returnInfo: 'No data is returned'
    },
    {
        name: 'formatDate',
        info: 'Format the data object based on user preferences. Only date part of the date object is returned by default',
        params: {
            value: { type: 'Date', info: 'The date object to be formatted' },
            format: { type: 'string', info: 'Custom date format to be used', optional: true },
            utc: { type: 'bool', info: 'Convert the date to UTC date object before formatting', optional: true }
        },
        returnType: 'string',
        returnInfo: 'The formated date part of the date object'
    },
    {
        name: 'formatTime',
        info: 'Format the data object based on user preferences. Only time part of the date object is returned by default',
        params: {
            value: { type: 'Date', info: 'The date object to be formatted' },
            format: { type: 'string', info: 'Custom time format to be used', optional: true },
            utc: { type: 'bool', info: 'Convert the date to UTC date object before formatting', optional: true }
        },
        returnType: 'string',
        returnInfo: 'The formated time part of the date object'
    },
    {
        name: 'formatDateTime',
        info: 'Format the data object based on user preferences',
        params: {
            value: { type: 'Date', info: 'The date object to be formatted' },
            format: { type: 'string', info: 'Custom date time format to be used', optional: true },
            utc: { type: 'bool', info: 'Convert the date to UTC date object before formatting', optional: true }
        },
        returnType: 'string',
        returnInfo: 'The formated date time string'
    },
    {
        name: 'getDays',
        info: 'Returns the list of days between a given date range along with information like if its a holiday, etc',
        params: {
            fromDate: { type: 'Date', info: 'Start date' },
            toDate: { type: 'Date', info: 'End date' }
        },
        returnType: 'Array<Day>',
        returnInfo: 'A list of days between the given date range'
    },
    {
        name: 'isHoliday',
        info: 'Check if a specific day is a holiday',
        params: {
            value: { type: 'Date', info: 'The date object' }
        },
        returnType: 'boolean',
        returnInfo: 'Returns true or false indicating if the given day is a holiday'
    }
];

const html = (<div>
    <h2>Common Functions</h2>
    <p className="mb-40">
        Custom functions can help you fetch data and some of the custom functions can update data. Custom functions also lets you do an
        HTTP call and pull data from Jira or from other API&apos;s.
        <br /><br />
        While most of the common functionalities are available as functions, sometimes you may not find what you need. If your
        usecase is generic and could be helpful for others, please feel free to request for a new common function by raising an issue in GitHub.
        <br /><br />
        You can call any of these functions using following syntax:<br />
        <strong>Regular function Syntax:</strong> <span className="expr-sample">CommonFunctions.formatDate(new Date())</span><br />
        <strong>Async function Syntax:</strong> <span className="expr-sample">await CommonFunctions.getWorklogs(&apos;JAS-123&apos;)</span>
        <br /><br />
        Following are the list of common functions available as on date to use within expressions:
    </p>

    <ul className="func-list">
        {functionInfo.map((func, i) => <li key={i} className="func-info">
            {func.async ? <span className="async-func">async </span> : null}
            <span className="func-name">{func.name}</span>({getParamInfo(func.params)})
            :
            <span className="return-type" title={func.returnInfo || 'Returns no data'}> {func.returnType || 'void'}</span>
            <span className="method-info"> - {func.info}</span>
        </li>)}
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;

export const Head = () => (<Seo title="Functions" />);


function getParamInfo(params) {
    if (!params) { return null; }
    const keys = Object.keys(params);

    return keys.map((key, i) => {
        const paramInfo = params[key];
        const param = <><span className="param-name">{key}</span> : <span className="param-type">{paramInfo.type}</span></>;

        return <span key={i} className="func-param" title={paramInfo.info}>{i > 0 ? ', ' : ''}{paramInfo.optional ? <>[{param}]</> : param}</span>
    });
}