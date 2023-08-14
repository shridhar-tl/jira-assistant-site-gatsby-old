import React from 'react';
import Layout from '../../layout';
import Link from '../../components/Link';
import Seo from '../../layout/seo';

function PublishProcess() {
    return (
        <Layout>
            <br /><br /><br /><br />
            <section className="container">
                <h2>Jira Assistant Publish Process</h2>

                <h3>Preparing the Package for Publishing</h3>
                <p>
                    Once your development work is complete and the latest code is available
                    in the "develop" branch, it needs to be merged into the "package"
                    branch. The package to be published will be built from the "package"
                    branch. Before merging, make sure to update the version number in all{' '}
                    <code>manifest.json</code> files under the "public" folder.
                </p>

                <p>
                    To build the package, follow these steps:
                </p>

                <h4>Local Build Option:</h4>
                <ol>
                    <li>Checkout the "package" branch in your local repository if you haven't already.</li>
                    <li>If it exists, delete the <code>node_modules</code> folder, as it can sometimes cause issues during the webstore review process.</li>
                    <li>Retrieve the latest node modules by running <code>npm install --force</code> and wait for the process to complete.</li>
                    <li>Finally, build the package by executing the command <code>npm run build</code>. This will generate packages for various browsers under the "build" folder.</li>
                </ol>

                <h4>Automated GitHub Build Option:</h4>
                <ol>
                    <li>After merging your changes into the "package" branch, push the branch to GitHub.</li>
                    <li>Automated builds will be triggered by GitHub Actions. Wait for the build to complete.</li>
                </ol>

                <p>
                    <strong>Steps to Download GitHub Automated Build Package:</strong>
                </p>
                <ol>
                    <li>In your web browser, visit the following URL: <Link href="https://github.com/shridhar-tl/jira-assistant/actions/workflows/build-ja.yml">GitHub Actions - Build and Deploy JA</Link>.</li>
                    <li>Navigate to the "Artifacts" section of the latest completed build.</li>
                    <li>Download the ZIP file containing the build package.</li>
                    <li>Extract the downloaded ZIP file to access the build package.</li>
                </ol>

                <h3>Publishing the Package to the Web Store</h3>
                <p>
                    Currently, only Shridhar (the developer) has the privilege to publish
                    the package to the web store. Automation of this step may be considered
                    in the future, or additional contributors may be granted this privilege.
                </p>

                <h3>Loading the Package for Testing</h3>
                <p>
                    The build package generated from the above steps can be temporarily
                    loaded for testing purposes. Use the appropriate version for each
                    browser, such as Chrome, Firefox, Edge, and Opera.
                </p>

                <p>
                    <strong>Steps for Loading the Temporary Extension:</strong>
                </p>
                <ul>
                    <li><strong>Google Chrome:</strong>
                        <ul>
                            <li>Open Chrome and go to <code>chrome://extensions/</code>.</li>
                            <li>Enable "Developer mode" in the top-right corner.</li>
                            <li>Click "Load unpacked" and select the <code>chrome</code> folder from the build output directory.</li>
                        </ul>
                    </li>
                    <li><strong>Mozilla Firefox:</strong>
                        <ul>
                            <li>Open Firefox and navigate to <code>about:debugging#/runtime/this-firefox</code>.</li>
                            <li>Click "Load Temporary Add-on..." and select any file within the <code>firefox</code> folder from the build output directory.</li>
                        </ul>
                    </li>
                    <li><strong>Microsoft Edge:</strong>
                        <ul>
                            <li>Open Edge and visit <code>edge://extensions/</code>.</li>
                            <li>Enable "Developer mode" in the bottom-left corner.</li>
                            <li>Click "Load unpacked" and select the <code>edge</code> folder from the build output directory.</li>
                        </ul>
                    </li>
                    <li><strong>Opera:</strong>
                        <ul>
                            <li>Open Opera and navigate to <code>opera://extensions/</code>.</li>
                            <li>Enable "Developer mode" in the top-right corner.</li>
                            <li>Click "Load unpacked" and select the <code>opera</code> folder from the build output directory.</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    Please note that some browsers, like Firefox, will automatically remove
                    temporarily loaded add-ons when the browser is closed. Therefore, this option is only suitable for testing and not a permanent solution.
                </p>
            </section>
        </Layout>
    );
}

export default PublishProcess;

export const Head = () => (<Seo title="Publish Process" />);
