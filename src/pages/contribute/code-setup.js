import React from 'react';
import Layout from '../../layout';
import Seo from '../../layout/seo';

function CodeSetupGuide() {
    return (
        <Layout>
            <br /><br /><br /><br />
            <section className="container">
                <h2 className="mb-10">Setting Up Jira Assistant Development Environment</h2>
                <div>
                    <h3>Prerequisites and Setup</h3>
                    <p>Before you start, make sure you have the following prerequisites:</p>

                    <h4>Node.js and npm</h4>
                    <p>
                        Node.js and npm (Node Package Manager) are required for running and managing Jira Assistant. You can download and install them from the official <a href="https://nodejs.org/">Node.js website</a>.
                    </p>

                    <h4>Git</h4>
                    <p>
                        Git is a version control system that's used to clone and manage the source code of Jira Assistant. You can install Git by following the instructions on the official <a href="https://git-scm.com/">Git website</a>.
                    </p>

                    <h4>Docker (Optional)</h4>
                    <p>
                        If you're planning to test a Jira Cloud app built with Atlassian Forge, Docker can be helpful for local development and testing. You can download and install Docker Desktop for your operating system from the official <a href="https://www.docker.com/products/docker-desktop">Docker website</a>.
                    </p>
                    <strong>Using Docker for Jira Cloud App Testing (Atlassian Forge)</strong>
                    <p>
                        If you're testing a Jira Cloud app built with Atlassian Forge, you may want to use Docker for local development and testing. Docker allows you to replicate the runtime environment of your app on the Jira Cloud platform.
                    </p>
                </div>
                <div>
                    <h3>Step 1: Clone the Repository</h3>
                    <p>Clone the Jira Assistant repository from GitHub:</p>
                    <code className="block">git clone https://github.com/shridhar-tl/jira-assistant.git</code>
                    <p>Navigate into the project directory:</p>
                    <code className="block">cd jira-assistant</code>
                    <p>Switch to develop branch:</p>
                    <code className="block">git checkout develop</code>
                </div>

                <div>
                    <h3>Step 2: Install Dependencies</h3>
                    <p>Install the project dependencies using npm:</p>
                    <code className="block">npm install</code>
                </div>

                <div>
                    <h3>Step 3: Install the Extension</h3>
                    <p>
                        Install the Jira Assistant extension from the Chrome Web Store or other supported browsers.
                        Search for "Jira Assistant" in the respective extension store and add it to your browser.
                    </p>
                </div>

                <div>
                    <h3>Step 4: Configure Host Entry</h3>
                    <p>
                        Setting up a custom host entry is crucial for local development. It simulates a domain name,
                        enabling OAuth and other functionalities to work seamlessly.
                    </p>

                    <h4>For Windows:</h4>
                    <p>Open Notepad or any text editor with administrator privileges.</p>
                    <p>
                        Open the <code>hosts</code> file located at <code>C:\Windows\System32\drivers\etc\hosts</code>.
                    </p>
                    <p>Add the following line:</p>
                    <code className="block">127.0.0.1 local.jiraassistant.com</code>
                </div>

                <div>
                    <h3>Step 5: Adjust Port Number</h3>
                    <p>
                        By default, the project runs on port 80. To change the port number, adjust the <code>.env</code> file.
                    </p>
                </div>

                <div>
                    <h2>Running the Project</h2>
                    <p>Run the project using npm:</p>
                    <code className="block">npm start</code>
                    <p>
                        Access the development environment at{' '}
                        <code>http://local.jiraassistant.com:{'{'}PORT{'}'}</code> (replace <code>{'{'}PORT{'}'}</code> with the chosen port number).
                    </p>
                    <p>
                        With the Jira Assistant extension installed, you can now explore and test the features of the project
                        seamlessly.
                    </p>
                </div>

                <p>Congratulations! You've successfully set up the Jira Assistant development environment.</p>
                <p>Stay tuned for more enhancements and updates in the near future!</p>
            </section>
        </Layout>
    );
};

export default CodeSetupGuide;

export const Head = () => (<Seo title="Code Setup" />);
