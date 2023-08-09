import React from 'react';
import FeaturesLayout from '../../layout/FeaturesLayout';
import { AppNameLong } from '../../_common/_constants';

const html = (<div>
    <iframe title="Dashboard overview" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/xNYNXWUgCeA?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Dashboard Features</h2>
    <h3>Create Custom Dashboard</h3>
    <p className="mb-40">
        Beyond the provided default dashboard, {AppNameLong} empowers you to craft multiple custom dashboards tailored to your preferences. You have the flexibility to populate these dashboards with various gadgets and personalize their appearance.
    </p>
    <ul className="mb-40">
        <li><strong>Create Dashboard:</strong> Initiate a new dashboard by clicking on the <span className="fa fa-wrench" /> icon located at the top right corner of the dashboard page. Select the "Create Dashboard" option, and a new dashboard with a default name will be generated.</li>
        <li><strong>Rename Dashboard:</strong> Modify dashboard titles and icons by clicking on the <span className="fa fa-edit" /> icon situated near the dashboard title's top left corner. Once adjusted, save the changes to apply the new name and icon.</li>
        <li><strong>Delete Dashboard:</strong> Permanently remove dashboards by selecting the <span className="fa fa-wrench" /> icon at the top right corner of the dashboard page, then choosing the "Delete Dashboard" option. Note that this action doesn't prompt for confirmation and is irreversible.</li>
        <li><strong>Change Layout:</strong> Switch between Tabbed and Grid layouts for the dashboard by clicking the <span className="fa fa-wrench" /> icon at the top right corner of the dashboard page and selecting "Show in Tabs" menu. Quick view popups always adopt Tabbed layout, regardless of the dashboard's selection.</li>
    </ul>
    <h3>Manage Gadgets</h3>
    <ul className="mb-40">
        <li>Effectively gather essential data insights through dashboard gadgets.</li>
        <li>Integrate existing gadgets or add "Custom Report" and "Report Builder" outputs as custom gadgets.</li>
        <li>Adjust gadget sizing and appearance to suit your preferences.</li>
        <li>Export data from tables within gadgets in CSV, Excel, or PDF formats, including custom gadgets.</li>
        <li>Enhance visibility with full-screen gadget mode accessed via the <span className="fa fa-expand" /> icon.</li>
        <li>In the Grid layout, effortlessly rearrange gadgets using drag-and-drop functionality.</li>
    </ul>
    <p className="mb-40">
        Below are the inbuilt gadgets available, along with any custom reports listed as gadgets:
    </p>
    <ul>
        <li><strong>My Open Tickets:</strong> Displays tickets assigned to you in a tabular format. Quickly add worklogs or bookmark tickets via the <span className="fa fa-ellipsis-v" /> icon.</li>
        <li><strong>Bookmarks:</strong> Lists bookmarked tickets and enables addition of multiple tickets to the list using the <span className="fa fa-plus" /> icon.</li>
        <li><strong>Logged Work - [Daywise]:</strong> Summarizes worklogs based on date, within the specified date range.</li>
        <li><strong>Worklog - [Pending Upload]:</strong> Lists worklogs created in the tool that await uploading to Jira, allowing a final review before submission.</li>
        <li><strong>Logged Work - [Ticketwise]:</strong> Summarizes worklogs based on tickets within the given date range.</li>
        <li><strong>My Reports:</strong> Lists reports created via "Custom Report" or "Report Builder" modules, offering edit, rename, delete, and export options. Shareable report definitions can be imported by others.</li>
        <li><strong>Current Day Calendar:</strong> Provides a calendar for adding worklogs for the current day, ideal for quick-view dashboards.</li>
        <li><strong>Current Week Calendar:</strong> Offers a calendar for adding worklogs for the current week, enhancing quick-view dashboards.</li>
        <li><strong>Status Wise Time Spent:</strong> Presents time spent on each ticket's specific status, aiding in issue analysis and agility enhancement.</li>
    </ul>
    <h3>Quick View</h3>
    <p className="mb-40">
        Set a preferred dashboard as the quick view page, accessible as a popover upon clicking the {AppNameLong} icon in the browser.
    </p>
    <ul>
        <li>To designate a dashboard as the quick view page, click the icon at the top right corner of the dashboard. Choose the "Set as Quick View" option.</li>
        <li>Quick view always employs the tabbed layout, irrespective of the dashboard layout settings.</li>
    </ul>
    <strong>Note:</strong> Quick view visibility is governed by enabling it under the "Menu Options" tab within the General Settings page.
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
