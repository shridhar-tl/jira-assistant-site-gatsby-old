import React from 'react';
import { AppNameLong } from '../../../_common/_constants';
import Link from '../../../components/Link';
import FeaturesLayout from '../../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Reports overview" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/TxNH1HQtiX0?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Reports</h2>

    <p className="mb-40">
        {AppNameLong} helps the users to generate various reports easily. There are few inbuilt reports like Worklog / Time sheet report,
        Sprint report, Estimate vs Actual report. Other than inbuilt reports, you can also build you own report using Custom report or
        Report Builder modules. Following are some of the details about the reports:
    </p>

    <h3>Worklog report</h3>
    <p className="mb-40">
        Worklog report is used to pull worklog details from Jira and generate report out of it. This is the most used and liked
        feature of {AppNameLong} out of all the other functionality.
    </p>

    <p className="mb-40">
        <strong>How to use:</strong>
    </p>
    <ul>
        <li>Choose a date for which you would like to view the report or click the refresh ( <span className="fa fa-refresh" /> )
            icon to load the report if date is already selected.</li>
        <li>You can choose the list of users by clicking the ( <i className="fa fa-users"></i> ) icon. If the user list is already
            added in &quot;User groups&quot; page, then same will be used here.</li>
        <li>Click on ( <i className="fa fa-cogs"></i> ) icon to change the settings of the report like follows:
            <ul>
                <li><strong>Log hour format:</strong> Select the format how worklog should be shown</li>
                <li><strong>Log breakup:</strong> Specify whether worklog on same ticket on same day should be summed up or shown as separate entries</li>
                <li><strong>Report timezone:</strong> What timezone should be used to display time for worklog</li>
                <li>Show or hide estimate related columns</li>
                <li><strong>JQL Filter:</strong> By default, all worklogs will be pulled from Jira for specified date range and given set of users.
                    If you want to add additional restrictions like Project, type of issues, status of ticket, etc., you can make use of the JQL filter for pulling the data.</li>
                <li>You can also export the Worklog report or any report for that case to different formats like CSV, Excel and PDF by clicking on
                    the <span className="fa fa-wrench" /> icon from top right corner of the report.</li>
            </ul>
        </li>
        <li>Time zone settings - Configure the time zone of each user & group properly while adding in group and select appropriate option in settings as well.</li>
        <li>You have additional settings affecting this report in Settings <i className="fa fa-arrow-right"></i> General menu in left hand side.</li>
    </ul>
    <p>
        <strong>Note: </strong> Any changes you make to users list in any of the report will not get saved permanently. It will be cleared when you
        reload the page. Refer &quot;User groups&quot; section under <Link href="/features/settings">Settings</Link> module to know more about user groups and saving user persistently.
    </p>

    <p className="mb-40">
        <strong>Features of Worklog / Time sheet report: </strong>
        Worklog report is generated and displayed in various ways in different tabs. Following are some of the details and have a look at the report to know more about it:
    </p>
    <ul>
        <li><strong>Grouped - [User daywise]</strong> tab displays the worklog data grouped and nested based on User groups,
            Users and Tickets as rows and Date based on selected date range as columns. You can also click on <span className="fa fa-clock-o" /> icon
            on appropriate ticket / date combination cells of the grid and add worklog quickly.</li>
        <li><strong>Summary - [User project wise]</strong> tab displays the summary of total hours logged grouped by &quot;User group&quot;
            & &quot;User&quot; in rows, and &quot;Project&quot; & &quot;Issue type&quot; in column.</li>
        <li><strong>Flat (Groupable)</strong> displays all the worklogs based on selected filters in flat table format.
            All the columns in this grid are sortable. This grid can also be grouped based on one or more columns just by drag and drop
            the columns to &quot;Group by&quot; section above grid.</li>
    </ul>


    <h3>Custom report</h3>
    <p className="mb-40">
        Custom report lets you generate simple report by filtering the data using JQL and selecting the columns to be displayed.
        Also you can format the data using some predefined formats and you can group by one or more columns.
    </p>

    <h3>Report Builder</h3>
    <p className="mb-40">
        &quot;Report Builder&quot; can be used by users with some technical knowledge to develop their own report.
        Using report builder module, almost any kind of simple to advanced reports can be developed.
        It supports getting various type of input from users, adding validation on input parameters, execute one or more JQL
        using the input parameters and get data from Jira, process the data in a way you would use it and display it as report.
        Some of the features supported by Report Builder are as follows.
    </p>
    <ul>
        <li><strong>Parameters</strong> with different datatypes like date, date range, text, numbers, etc. can be add and user
            can input the value at the time of generating the report</li>
        <li>One or more <strong>JQL</strong> query can be executed in Jira and data can be used to generate report.</li>
        <li>One or more UI components like Table, Images, Charts, etc., can be dragged and dropped to report and configure it to represent the data.</li>
        <li>Table UI component allows you to create column and row grouping based on records.</li>
        <li>You can also add custom menus to grid similar to how gadgets in {AppNameLong} contains it.</li>
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
