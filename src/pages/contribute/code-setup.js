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
                    <h3>Step 1: Clone the Repository</h3>
                    <p>Clone the Jira Assistant repository from GitHub:</p>
                    <code>git clone https://github.com/shridhar-tl/jira-assistant.git</code>
                    <p>Navigate into the project directory:</p>
                    <code>cd jira-assistant</code>
                    <p>Switch to develop branch:</p>
                    <code>git checkout develop</code>
                </div>

                <div>
                    <h3>Step 2: Install Dependencies</h3>
                    <p>Install the project dependencies using npm:</p>
                    <code>npm install</code>
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
                    <code>127.0.0.1 local.jiraassistant.com</code>
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
                    <code>npm start</code>
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
