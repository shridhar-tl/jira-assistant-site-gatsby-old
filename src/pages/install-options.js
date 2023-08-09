import React from 'react';
import Link from '../components/Link';
import { AppNameLong, AppNameShort } from '../_common/_constants';
import Layout from '../layout';
import Seo from '../layout/seo';

function WebVersionContent() {
    return (
        <Layout>
            <div className="container">
                <br /><br /><br /><br /><br />
                <h1 className="mb-20">{AppNameLong}: Installation and Authentication Options</h1>
                <p className="mb-40">
                    Explore the different installation options for {AppNameShort}—Extension, Cloud App, and Web version. Each option offers
                    distinct advantages and authentication methods to suit your preferences. Choose from integrated single-click authentication,
                    OAuth with Jira, or traditional username and password/API key authentication. Whether you prefer the seamless integration of
                    the Extension, the convenience of the Cloud App, or the flexibility of the Web version, {AppNameShort} provides versatile
                    solutions to enhance your Jira experience.
                </p>
                <br />
                <h2 className="mb-10">Types of Authentication</h2>
                <p className="mb-40">
                    {AppNameLong} offers multiple authentication options to cater to different security levels and user preferences. Each option has its own set of advantages and limitations:
                </p>

                <div className="section">
                    <h3 className="mb-10">1. Single Click Integration by reusing browser session</h3>
                    <p className="mb-10">
                        Single Click Integration is the most secure authentication option as it relies on the browser's authenticated session with Jira, ensuring that only authorized users can access {AppNameLong}.
                    </p>
                    <div className="advantages">
                        <h4>Advantages:</h4>
                        <ul>
                            <li>Utilizes the browser's default authenticated session with Jira, ensuring a secure connection.</li>
                            <li>Users don't need to provide credentials, simplifying the authentication process.</li>
                            <li>Allows quick and seamless access to {AppNameLong} without the need to keep the Jira tab open.</li>
                        </ul>
                    </div>
                    <div className="limitations">
                        <h4>Limitations:</h4>
                        <ul>
                            <li>Requires users to be logged in to Jira every time they use {AppNameLong}.</li>
                            <li>Works only when browser extension is installed</li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h3 className="mb-10">2. OAuth with Jira</h3>
                    <div className="advantages">
                        <p className="mb-10">
                            OAuth with Jira provides enhanced security through one-time consent and eliminates the need for storing user credentials, enhancing the overall user experience.
                        </p>
                        <h4>Advantages:</h4>
                        <ul>
                            <li>Requires one-time consent in Jira, enhancing security and user control.</li>
                            <li>Eliminates the need to store user credentials as authentication is managed via an API.</li>
                        </ul>
                    </div>
                    <div className="limitations">
                        <h4>Limitations:</h4>
                        <ul>
                            <li>Auth tokens are stored in the browser cache for subsequent use</li>
                            <li>Currently supported for cloud Jira instances only; datacenter instances require custom solutions. Contact developer for assistance.</li>
                            <li>The Sprint Report feature is not available when using OAuth authentication.</li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h3 className="mb-10">3. Basic authentication using Username and Password / API Key</h3>
                    <p className="mb-10">
                        Basic authentication is a fallback option for cases where more secure methods are not feasible, but it should be used with
                        caution due to security risks.
                    </p>
                    <div className="advantages">
                        <h4>Advantages:</h4>
                        <ul>
                            <li>Allows users to authenticate using their Jira credentials or an API key.</li>
                            <li>Can be used when other authentication methods are not feasible or preferred.</li>
                            <li>Works with both Jira cloud and datacenter version</li>
                        </ul>
                    </div>
                    <div className="limitations">
                        <h4>Limitations:</h4>
                        <ul>
                            <li>Considered the least secure option as it involves storing credentials (encoded) in the browser cache.</li>
                            <li>Recommended only when other authentication methods are not available or suitable.</li>
                        </ul>
                    </div>
                </div>
                <br /><br /><br />
                <h2 className="mb-10">Exploring Installation Options</h2>
                <br />
                <h3 className="mb-10">1. Browser Extension</h3>

                <p className="mb-10">
                    The Extension Version installation provides a convenient way to integrate {AppNameLong} with popular browsers, offering Quick View
                    functionality and support for various authentication methods. However, users need to install it individually.
                </p>
                <div className="advantages">
                    <h4>Advantages:</h4>
                    <ul>
                        <li>Available for popular browsers like Chrome, Edge, Opera, and Firefox.</li>
                        <li>Supports all three authentication methods, providing flexibility for users.</li>
                        <li>Includes the unique Quick View feature for seamless access to dashboards.</li>
                        <li>Provides a centralized settings storage mechanism for better user management.</li>
                    </ul>
                </div>
                <div className="limitations">
                    <h4>Limitations:</h4>
                    <ul>
                        <li>May not be officially supported in some chromium-based browsers like Vivaldi.</li>
                        <li>Requires installation for each user individually.</li>
                        <li>Not suitable if users are not allowed to install extensions</li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="mb-10">2. Jira Cloud App</h3>
                    <p className="mb-10">
                        The Jira Cloud App installation offers a seamless integration within Jira Cloud, providing secure storage for
                        authentication related information. It eliminates the need for individual installations, making it immediately available
                        to all users within the Jira instance.
                    </p>
                    <div className="advantages">
                        <h4>Advantages:</h4>
                        <ul>
                            <li>Installed within Jira Cloud, eliminating the need for browser extensions.</li>
                            <li>Utilizes OAuth authentication for enhanced security with one-time user consent.</li>
                            <li>Accessible to all users once installed, without individual installations.</li>
                        </ul>
                    </div>
                    <div className="limitations">
                        <h4>Limitations:</h4>
                        <ul>
                            <li>Settings and pending worklog data are still stored within browser cache only and so has to stick on to same browser.</li>
                            <li>Only applicable for Jira Cloud instances; not compatible with datacenter versions.</li>
                            <li>Does not support the Sprint Report feature due to OAuth authentication.</li>
                            <li>Requires admin access during installation, but subsequent usage doesn't need admin rights.</li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h3 className="mb-10">3. Web Version</h3>
                    <p className="mb-10">
                        The Web Version option offers flexibility for custom hosting, ensuring regular updates, and provides a browser-based interface to
                        access {AppNameLong}'s features. It's easily accessible to all users, making it a suitable choice for those who need quick access
                        without individual installations. Read more about benefits of <Link href="/why-web-version">Web version</Link>.
                    </p>
                    <div className="advantages">
                        <h4>Advantages:</h4>
                        <ul>
                            <li>Hosted as a static web app, accessible via a browser.</li>
                            <li>Allows custom hosting if not interested to use public version</li>
                            <li>Receives updates for bug fixes and feature enhancements regularly.</li>
                            <li>Accessible to all users without needing individual installations.</li>
                            <li>Can stand alone and store its own setting or integrate with extension and share data settings from extension</li>
                        </ul>
                    </div>
                    <div className="limitations">
                        <h4>Limitations:</h4>
                        <ul>
                            <li>Requires internet access at all times to use, unlike other options.</li>
                            <li>For datacenter instances using OAuth authentication needs self hosting and custom implementation.</li>
                        </ul>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </Layout>
    );
}

export default WebVersionContent;

export const Head = () => (<Seo title="Installation & Authentication" />);