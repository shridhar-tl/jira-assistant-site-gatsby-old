import React from 'react';
import { AppNameLong, Urls } from '../../_common/_constants';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Quick integration" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/HsWq7cT3Qq0?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Installation, Integration and Configuration</h2>

    <h3>Installation</h3>
    <p className="mb-40">
        {AppNameLong} is conveniently accessible across different browsers via their respective web stores.
        Installation is hassle-free – simply choose your preferred browser. Moreover, a self-distributed version is offered exclusively for Firefox.
        You can initiate the installation process using the provided link or by selecting the appropriate version from the "Install" menu located above.
        With its compact size, the extension downloads swiftly and is ready for use within seconds.
    </p>
    <ul className="mb-40">
        <li><strong>For Chrome:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.chromeLink}</a></li>
        <li><strong>For Firefox:</strong> <a href={Urls.firefoxLink} target="_blank" rel="noopener noreferrer">{Urls.firefoxLink}</a></li>
        <li><strong>Self distributed (For Firefox):</strong> If you were not able to find the addon in above webstore url, you can also
            use the following URL to download the package and install it your self, which is self distributed version and not verified
            by Firefox addon store: <a href={Urls.selfDistInstall} target="_blank" rel="noopener noreferrer">{Urls.selfDistInstall}</a></li>
        <li><strong>For Edge:</strong> <a href={Urls.edgeLink} target="_blank" rel="noopener noreferrer">{Urls.edgeLink}</a></li>
        <li><strong>For Opera:</strong> <a href={Urls.operaLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For Web:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For Jira Cloud App:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For other browsers:</strong> Currently not available. But if popularity is more then will be released soon.
            Have a look at the Issues tab in GitHub and +1 on appropriate issue, if you need it for other browsers.</li>
    </ul>

    <p className="mb-40">
        <strong>Rate and Comment:</strong> If you find {AppNameLong} valuable, we kindly request a moment of your time to rate it on
        the respective web store URLs provided above. Your feedback not only helps us reach a wider audience but also motivates our
        developers to continually enhance this tool for your benefit.
    </p>
    <p className="mb-40">
        Link to Atlassian Marketplace: <a href={Urls.marketPlace} target="_blank" rel="noopener noreferrer">{Urls.marketPlace}</a>.
        You can also add a rating or review in marketplace listing. <strong>Note:</strong> In marketplace, this extension is available with different name (i.e. JAssistant) because atlassian does not allow the extension name containing any of its product name.
    </p>

    <h3>Integration & Configuration</h3>
    <p className="mb-40">
        Integrating {AppNameLong} with Jira is remarkably straightforward. After installing the tool, the initial integration involves
        a few simple steps. Authenticate with Jira within your browser and then click on the {AppNameLong} icon from your browser toolbar.
        A popover page will appear, pre-populated with the URL of your current Jira tab. By clicking the "Integrate" button within this
        popover, the integration process is completed. Notably, there's no need to provide additional credentials, as {AppNameLong}
        seamlessly utilizes your browser's existing Jira authentication.
    </p>
    <p className="mb-40">
        <strong>Note:</strong> The behavior of the integration page—whether it opens as a popover or a separate tab, and whether the
        Jira URL is automatically populated—varies based on the permissions granted to the extension by your browser. This behavior may
        differ across different browsers and versions.
    </p>
</div >);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
