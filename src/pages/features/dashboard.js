import React from 'react';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Dashboard overview" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/xNYNXWUgCeA?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Dashboard Features</h2>
    <h3> Create custom dashboard</h3>

    <p className="mb-40">
        Other than the inbuilt existing dashboard, you can create as many custom dashboards you would like to have. You can also add as many gadgets you would like to add to the dashboard and change the appearance of the individual gadget.
    </p>
    <ul className="mb-40">
        <li><strong>Create dashboard:</strong> Click on <span className="fa fa-wrench" /> icon from top right corner of dashboard page and click on &quot;Create Dashboard&quot; menu which will create a new dashboard with default name.</li>
        <li><strong>Rename dashboard:</strong> Click on the <span className="fa fa-edit" /> icon from top left corner near title of dashboard. This will make the title and icon editable. You can change the name of the dashboard and click on icon to change the icon. Once done, save the changes and the dashboard will be renamed.</li>
        <li><strong>Delete dashboard:</strong> Click on the <span className="fa fa-wrench" /> icon from top right corner of dashboard page and click on &quot;Delete dashboard&quot; menu to delete the dashboard permanently. Note: This action will not prompt for confirmation and is not reversible</li>
        <li><strong>Change Layout:</strong> Click on the <span className="fa fa-wrench" /> icon from top right corner of dashboard page and click on &quot;Show in tabs&quot; menu to toggle between Tabbed layout and Grid layout. By default, quick view popup will always show gadgets in Tabbed layout irrespective of selection.</li>
    </ul>

    <h3>Manage gadgets</h3>
    <ul className="mb-40">
        <li>You can use gadgets to get overview of required data through dashboard.</li>
        <li>You can either add an existing gadget or add &quot;Custom Report&quot; and report created through &quot;Report Builder&quot; as custom gadget in dashboard.</li>
        <li>You can also change the appearance of gadget in terms of sizing.</li>
        <li>By default, any table inside any gadgets can be exported to CSV, Excel or PDF formats. This is applicable for custom gadgets as well.</li>
        <li>You can view the gadgets in full screen mode for a better experience by clicking on the <span className="fa fa-expand" /> icon.</li>
        <li>When the dashboard is viewed in Grid layout, you can rearrange the gadgets by drag and drop with its header.</li>
    </ul>

    <p className="mb-40">
        Following are list of inbuilt gadgets. Along with these gadgets all the custom reports would get listed as gadget in manage gadget popup.
    </p>
    <ul>
        <li><strong>My Open Tickets:</strong> List&apos;s all the tickets assigned to you in tabular format. Clicking on <span className="fa fa-ellipsis-v" /> icon on the ticket number column lets you add worklog or bookmark the ticket quickly.</li>
        <li><strong>Bookmarks:</strong> Lists the bookmarked tickets. Clicking on <span className="fa fa-plus" /> icon will let you add multiple tickets to gather to the list.</li>
        <li><strong>Logged Work - [Daywise]:</strong> Provides the summary of work logged by you grouped based on date for the given date range.</li>
        <li><strong>Worklog - [Pending Upload]:</strong> Worklog created in the tool will not get uploaded immediately to the Jira unless configured so. Hence worklog added by you which is not uploaded to Jira yet is listed here. You can view the summary in other gadgets and upload it once everything looks good.</li>
        <li><strong>Logged Work - [Ticketwise]:</strong> Provides the summary of work logged by you grouped based on tickets for the given date range.</li>
        <li><strong>My Reports:</strong> Any reports created and saved by you though &quot;Custom Report&quot; or &quot;Report Builder&quot; module will be listed here. You can rename, edit or delete those reports through this gadget. You can also export the report definition from the gadget and share it with other users, where they can import and use it for report generation.</li>
        <li><strong>Current day calendar:</strong> This gadget shows the calendar with current date for adding worklog. This is particularly useful when used with in dashboard set for quick view.</li>
        <li><strong>Current week calendar:</strong> This gadget shows the calendar with current week for adding worklog. This is particularly useful when used with in dashboard set for quick view.</li>
        <li><strong>Status Wise Time Spent:</strong> This gadget lets you view the summary of time each ticket was on a particular status. This gadget would help in identifying the blocker and improve agility.</li>
    </ul>

    <h3>Quick view</h3>
    <p className="mb-40">
        You can set a particular dashboard as quick view page which lets you view it as a popover when JA icon is clicked in browser.
    </p>
    <ul>
        <li>To easily set a dashboard as quick view page you can click on icon from the top right corner of dashboard and click &quot;Set as quick view&quot; menu.</li>
        <li>By default, quick view will always use tabbed layout irrespective of what is set for dashboard.</li>
        <li><strong>Note:</strong> Though a dashboard is set as quick view, it would be shown only when it is enabled under &quot;Menu options&quot; tab from General Settings page.</li>
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
