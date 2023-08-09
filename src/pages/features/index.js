import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import Seo from '../../layout/seo';
import FeaturesLayout from '../../layout/FeaturesLayout';
import Link from '../../components/Link';

const html = (<div>
    <h2 className="mb-10">Features Overview</h2>
    <p className="mb-40">
        {AppNameLong} facilitates daily worklog tracking and generates customizable reports.
        Explore the key features below and navigate to specific modules for more details.
    </p>

    <h3>Header</h3>
    <p className="mb-40">
        The header of the extensions contain following options.
    </p>
    <ul className="mb-40">
        <li><strong>Jira Updates:</strong> Displays updates in Jira tickets where you are mentioned or assignee/reporter,
            smartly listing unviewed updates. Advanced settings allow customization.</li>
        <li><strong>Developer Notification:</strong> Notifies users about updates and known bugs.
            Adjustable via "Advanced Settings," recommended to keep enabled.</li>
        <li><strong>Switch Instance:</strong> Integrate and switch between multiple Jira instances conveniently.</li>
        <li><strong>Help Video:</strong> Access module-specific help videos using the <span className="fa fa-youtube-play" /> icon.</li>
        <li><strong>Dark mode:</strong> Personalize the extension's appearance by toggling between dark and light mode
            <span className="fa fa-adjust" /> icon.</li>
        <li><strong>Rate / Share:</strong> Rate the extension or share it via different platforms using the
            <span className="fa fa-share-alt" /> icon.</li>
        <li><strong>Contact Developer:</strong> Easily reach out to the developer for bugs or suggestions
            using the <span className="fa fa-bug" /> icon.</li>
    </ul>

    <h3>Key Features</h3>
    <p className="mb-40">
        Discover the prominent features offered by {AppNameLong}. For more information, explore individual modules.
    </p>
    <ul className="mb-40">
        <li>Integrate and switch between multiple Jira servers/accounts effortlessly.</li>
        <li>Create customized dashboards, gadgets, and layouts to suit your requirements.</li>
        <li>Rearrange gadgets via drag-and-drop functionality.</li>
        <li>Add existing or custom gadgets to your dashboard.</li>
        <li>Easily manage worklogs with drag-and-drop and copy features.</li>
        <li>Efficiently import worklogs and issues via CSV file uploads.</li>
        <li>Generate built-in reports (Worklog, Sprint, Estimate vs Actual) with extensive customization.</li>
        <li>Create personalized reports, export definitions, and share for others to use.</li>
        <li>Automatically generate worklogs for meetings through calendar integration.</li>
        <li>Categorize users into groups for targeted reporting.</li>
        <li>Customize the JA icon's behavior, open modules, menus, or a quick view dashboard.</li>
        <li>Personalize the extension with abundant options from the settings page.</li>
    </ul>

    <h3>Miscellaneous Features</h3>
    <p className="mb-40">
        Explore miscellaneous features available in {AppNameLong}. Some are explained further in appropriate modules.
    </p>
    <ul className="mb-40">
        <li>Export grids to CSV, Excel, or PDF formats.</li>
        <li>Utilize groupable grids for column-based data grouping via drag-and-drop.</li>
        <li>Fixed header and sorting available for all grids during scrolling.</li>
        <li>Clicking a Jira ticket number opens the corresponding ticket in Jira.</li>
        <li>Access YouTube video playlists to learn about various <Link href="https://www.youtube.com/watch?list=PLxDBQLgpBhsDGppYrDqARYULukk7XFJPV&v=HsWq7cT3Qq0">features</Link> and <Link href="https://www.youtube.com/watch?v=HMyBkaZ09Xw&list=PLxDBQLgpBhsB_4Q2CGsViLCvfulmVuLAL">report builder</Link>.</li>
    </ul>
</div>);

const Features = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Features;

export const Head = () => (<Seo title="Features" />);
