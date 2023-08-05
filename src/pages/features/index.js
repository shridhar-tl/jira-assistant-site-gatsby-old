import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import Seo from '../../layout/seo';
import FeaturesLayout from '../../layout/FeaturesLayout';
import Link from '../../components/Link';

const html = (<div>
    <h2 className="mb-10">Features Overview</h2>
    <p className="mb-40">
        {AppNameLong} helps to track your worklog on daily basis and generate multiple reports with lots of customizations.
        Following are some of the high level features available in {AppNameLong}. You can click on individual module to know more about it.
    </p>

    <h3>Header</h3>
    <p className="mb-40">
        The header of the extensions contain following options.
    </p>
    <ul className="mb-40">
        <li><strong>Jira updates:</strong> All the updates in Jira tickets where you are mentioned or assignee / reporter, will be displayed as updates to you.
            This would smartly list the updates only if you
            haven&apos;t viewed the updates after that has happened. From advanced settings page, you can control this feature by
            modifying the JQL used to fetch the tickets list and enable or disable this feature.</li>
        <li><strong>Developer notification:</strong> Any notifications like new updates in extension or known bugs are reported to users
            through the notification option in the extension. You can enable or disable this feature through &quot;Advanced Settings&quot; page.
            But we suggest you, not to disable it as you may miss important information&apos;s.</li>
        <li><strong>Switch instance:</strong> You can integrate with multiple instance of Jira and easily switch between instances by clicking
            on the Jira domain name shown on header section</li>
        <li><strong>Help video:</strong> Clicking on <span className="fa fa-youtube-play" /> icon loads the help video specific to current module in a popup.
            This would help the new users to understand the key features of the extension.</li>
        <li><strong>Change skin:</strong> Clicking on <span className="fa fa-adjust" /> icon lets you choose one out of multiple skin available for you to choose.
            This would let you to personalize the look of the extension.</li>
        <li><strong>Rate / share:</strong> Clicking on <span className="fa fa-share-alt" /> icon lets you rate the extension in web store or share it with others
            through different medium.</li>
        <li><strong>Contact developer:</strong> Clicking on <span className="fa fa-bug" /> icon lets you to contact the developer in case of any bugs or suggestions.
            Note: Although this feature is handy, you are requested to use the GitHub issue tracker when ever possible as it
            helps in updating the status and having conversations easier</li>
    </ul>

    <h3>Key features</h3>
    <p className="mb-40">
        Following are the key features available in {AppNameLong}. You can navigate to individual module to know more about it.
    </p>
    <ul className="mb-40">
        <li>Integrate with multiple Jira server / account and switch between instances easily.</li>
        <li>Create multiple custom dashboard, add gadgets, and customize layout to fit your needs.</li>
        <li>You can Drag and drop the gadgets to rearrange it.</li>
        <li>You can add any pre existing gadget or create custom gadget and add it to dashboard.</li>
        <li>Easily add worklog with drag & drop, copy features.</li>
        <li>Bulk import worklogs and issues quickly by uploading CSV file.</li>
        <li>Easily generate inbuilt report like Worklog report, Sprint report, Estimate vs Actual report within minutes with lots of customization options.</li>
        <li>Build a simple to advanced report by your own where existing reports do not meet your needs.
            You can also export the report definition and share it with others so that they can import it to their instance and generate report.</li>
        <li>Integrate with calendar to automatically generate worklog for meetings with single click.</li>
        <li>Categorize users under various groups and use it while generating report.</li>
        <li>Customize what happens when clicked on JA icon in menu like directly open a specific module,
            show list of customized menus or show a quick view dashboard in tabbed layout.</li>
        <li>Customize the extension with lots of options from settings page.</li>
    </ul>

    <h3>Miscellaneous features</h3>
    <p className="mb-40">
        Following are some of the miscellaneous features available in {AppNameLong}. Some of them may be explained in detail under appropriate module.
    </p>
    <ul className="mb-40">
        <li>Export option: Almost all the grid in the extension can be exported in different formats like CSV, Excel and PDF.</li>
        <li>Groupable grid: Groupable grid available in extension allows you to group your data based on one or more columns just by
            dragging and dropping it to group zone.</li>
        <li>All the grid available in extension has fixed header while scrolling and allows sorting based on any columns.</li>
        <li>Clicking on any Jira ticket number opens that ticket in Jira.</li>
        <li>Following YouTube video playlist helps you to know about different
            <Link href="https://www.youtube.com/watch?list=PLxDBQLgpBhsDGppYrDqARYULukk7XFJPV&v=HsWq7cT3Qq0">features</Link>
            and <Link href="https://www.youtube.com/watch?v=HMyBkaZ09Xw&list=PLxDBQLgpBhsB_4Q2CGsViLCvfulmVuLAL">report builder</Link>.</li>
    </ul>
</div>);

const Features = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Features;

export const Head = () => (<Seo title="Features" />);
