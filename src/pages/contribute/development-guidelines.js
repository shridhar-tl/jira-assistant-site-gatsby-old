import React from 'react';
import Layout from '../../layout';
import Link from '../../components/Link';
import Seo from '../../layout/seo';

function DevelopmentGuidelines() {
    return (
        <Layout>
            <br /><br /><br /><br />
            <section className="container">
                <h2 className="mb-10">Jira Assistant Development Guidelines and Best Practices</h2>
                <h3>Contributing to Jira Assistant</h3>
                <p>
                    Before diving into development, please review the{' '}
                    <Link href="/contribute/how-to-contribute">Contribution Guidelines</Link> to ensure a seamless collaboration experience.
                </p>
                <h3>Starting the Development Process</h3>
                <p>
                    To kickstart your development journey, follow these steps:
                </p>
                <ol>
                    <li>
                        Familiarize yourself with the{' '}
                        <Link href="/contribute/how-to-contribute">Contribution Guidelines</Link>.
                    </li>
                    <li>
                        If you're planning to develop a new module, create a detailed issue and await approval from Shridhar TL.
                    </li>
                    <li>
                        Assign the relevant GitHub issue to yourself and maintain its status.
                    </li>
                    <li>
                        Create a new branch from the 'develop' branch and include informative commit comments.
                    </li>
                    <li>
                        Regularly sync your branch with 'develop' to facilitate merging later.
                    </li>
                </ol>
                <h3>Setting Up Your Local Development Environment</h3>

                <h4>Cloning and Preparing Jira Assistant Sources</h4>
                <p>
                    Refer <Link href="/contribute/code-setup">Code Setup</Link> document to setup and run Jira Assistant locally.
                </p>
                <h4>Creating a Free Cloud Instance for Development</h4>
                <p>
                    For easy development, use Jira's Cloud version, free for up to 5 users. You can also join Shridhar TL's shared development instance by reaching out to <Link href="mailto:shridhar.tl@gmail.com">shridhar.tl@gmail.com</Link>. Sharing this instance enhances development by leveraging a large dataset. To learn more or set up your instance:
                </p>
                <ul>
                    <li>
                        To create a new account: <Link href="http://go.atlassian.com/about-cloud-dev-instance">http://go.atlassian.com/about-cloud-dev-instance</Link>
                    </li>
                    <li>
                        To know more about this free instance: <Link href="https://blog.developer.atlassian.com/cloud-ecosystem-dev-env/">https://blog.developer.atlassian.com/cloud-ecosystem-dev-env/</Link>
                    </li>
                </ul>
                <h4>Setting Up a Local Jira Instance (30 Days Trial)</h4>
                <p>
                    If you prefer local testing, Docker makes it straightforward. Run the following command to set up a Docker container with Jira:
                </p>
                <p>
                    <strong>Note:</strong> This command will download around 1GB of data for container setup.
                </p>
                <code className="block">
                    docker pull atlassian/jira-software<br />
                    docker volume create --name jiraVolume<br />
                    docker run -v jiraVolume:/var/atlassian/application-data/jira --name="jira" -d -p 9090:8080 atlassian/jira-software
                </code>
                <p>
                    For subsequent development sessions, simply start the existing container with:
                </p>
                <code className="block">
                    docker start jira
                </code>
                <p>
                    Access your personal Jira instance by opening <Link href="http://localhost:9090">http://localhost:9090</Link> in your browser and following the setup instructions.
                </p>
            </section>
        </Layout>
    );
}

export default DevelopmentGuidelines;

export const Head = () => (<Seo title="Development Guidelines" />);
