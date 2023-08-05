import React from 'react';
import { AppNameLong, Urls } from '../../_common/_constants';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Quick integration" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/HsWq7cT3Qq0?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Installation, Integration and Configuration</h2>

    <h3>Installation</h3>
    <p className="mb-40">
        {AppNameLong} is available for various browsers through web store. You can install it in any browser of your choice. Also a self distributed version is available for Firefox additionally. You can install {AppNameLong} through following link or by clicking on appropriate version under &quot;Install&quot; menu above. This extension is tiny in size for download and really gets installed in seconds.
    </p>
    <ul className="mb-40">
        <li><strong>For Chrome:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.chromeLink}</a></li>
        <li><strong>For Firefox:</strong> <a href={Urls.firefoxLink} target="_blank" rel="noopener noreferrer">{Urls.firefoxLink}</a></li>
        <li><strong>Self distributed (For Firefox):</strong> If you were not able to find the addon in above webstore url, you can also use the following URL to download the package and install it your self, which is self distributed version and not verified by Firefox addon store: <a href={Urls.selfDistInstall} target="_blank" rel="noopener noreferrer">{Urls.selfDistInstall}</a></li>
        <li><strong>For Edge:</strong> <a href={Urls.edgeLink} target="_blank" rel="noopener noreferrer">{Urls.edgeLink}</a></li>
        <li><strong>For Opera:</strong> <a href={Urls.operaLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For Web:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For Jira Cloud App:</strong> <a href={Urls.chromeLink} target="_blank" rel="noopener noreferrer">{Urls.operaLink}</a></li>
        <li><strong>For other browsers:</strong> Currently not available. But if popularity is more then will be released soon. Have a look at the Issues tab in GitHub and +1 on appropriate issue, if you need it for other browsers.</li>
    </ul>

    <p className="mb-40">
        <strong>Rate and comment</strong> If you like {AppNameLong} then kindly spend a minute to rate it in web store from the above respective url&apos;s. Your rating would help this tool to reach more people and encourage the developers to provide a even better tool for you.
    </p>
    <p className="mb-40">
        Link to Atlassian Marketplace: <a href={Urls.marketPlace} target="_blank" rel="noopener noreferrer">{Urls.marketPlace}</a>. You can also add a rating or review in marketplace listing. <strong>Note:</strong> In marketplace, this extension is available with different name (i.e. JAssistant) because atlassian does not allow the extension name containing any of its product name.
    </p>

    <h3>Integration & Configuration</h3>
    <p className="mb-40">
        Integration with Jira through {AppNameLong} is quiet simple. After installation, for first time integration, authenticate with Jira in your browser and from the same tab, just click on JA icon from your browser. This will open a popover page where automatically the URL of the Jira (current tab url) is populated. You can click on Integrate button inside the popover page and you are done. You need not provide any credentials to connect to Jira, by default your browsers authentication with Jira will be used in {AppNameLong}.
    </p>
    <p className="mb-40">
        <strong>Note:</strong> Whether the integrate page opens as popover or separate tab and whether the Jira URL is automatically filled or not totally depends on the permission given to the extension by the browser. So, this behaviour may differ in different browsers and different versions.
    </p>
</div >);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
