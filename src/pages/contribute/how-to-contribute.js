import React from 'react';
import Layout from '../../layout';
import Link from '../../components/Link';
import Seo from '../../layout/seo';

function ContributeToJiraAssistant() {
    return (
        <Layout>
            <br /><br /><br /><br />
            <section className="container">
                <h2>Contribute to Jira Assistant</h2>
                <p>
                    Thank you for your interest in contributing to the development of Jira Assistant. Your contributions are invaluable in enhancing this tool for users around the world.
                </p>

                <h3>How to Contribute</h3>
                <p>
                    The <code>develop</code> branch contains the latest code. To contribute effectively, follow these steps:
                </p>
                <ol>
                    <li>
                        Start by creating a detailed issue on GitHub, and assign it to Shridhar TL. This practice ensures a smooth transition when you create a pull request.
                    </li>
                    <li>
                        Maintain a universal approach – your changes should be browser-agnostic and beneficial for all users. Avoid implementing features tailored to specific needs.
                    </li>
                </ol>

                <h3>Where Can You Make a Difference?</h3>
                <p>
                    There are several areas where your input can make a significant impact:
                </p>
                <ul>
                    <li>
                        Documenting the existing features comprehensively to reduce user inquiries.
                    </li>
                    <li>
                        Expanding the FAQ module by adding new questions and scenarios.
                    </li>
                    <li>
                        Rigorously testing existing features and accurately reporting bugs, including clear reproduction steps.
                    </li>
                    <li>
                        Strengthening the stability of the project by writing tests for components/pages.
                    </li>
                    <li>
                        Proposing new feature ideas and requirements via GitHub issues.
                    </li>
                    <li>
                        Participating in the analysis of specific requirements listed below.
                    </li>
                </ul>

                <h4>Analyzing Outstanding Requirements</h4>
                <p>
                    For those who wish to contribute analytically, here are some ongoing requirements that could benefit from your expertise:
                </p>
                <ul>
                    <li>
                        Creating a free web service/API for submitting queries and bugs directly from Jira Assistant.
                    </li>
                    <li>
                        Exploring calendar integration possibilities with both Outlook and Jira.
                    </li>
                    <li>
                        Investigating the feasibility of a web service/API providing holiday-related information.
                    </li>
                </ul>
                <p>
                    <strong>Note:</strong> While fulfilling all the criteria is ideal, addressing the most crucial aspects is a great starting point.
                </p>

                <h3>Best Practices for Development</h3>
                <p>
                    To ensure your contributions align seamlessly with the project's goals, follow these guidelines:
                </p>
                <ul>
                    <li>
                        Develop modules that cater to the broader user base, irrespective of their Jira version.
                    </li>
                    <li>
                        Refrain from dependencies on specific plugins or custom fields in Jira.
                    </li>
                    <li>
                        Avoid utilizing non-open-source components or libraries.
                    </li>
                    <li>
                        Resolve any issues or warnings before submitting your code.
                    </li>
                    <li>
                        Verify that your new additions do not disrupt existing functionality.
                    </li>
                    <li>
                        Optionally, offer documentation for your module, which can also be integrated into the FAQ section.
                    </li>
                    <li>
                        While not mandatory, creating unit tests for your module enhances its quality.
                    </li>
                </ul>

                <h3>Setting Up the Development Environment</h3>
                <p>
                    To initiate your development journey, refer to the <Link href="/contribute/development-guidelines">Development Support Guide</Link>. This guide provides comprehensive instructions for configuring your local environment and commencing development.
                </p>
                <p>
                    For the final stages of testing and publishing, consult the <Link href="/contribute/how-to-publish">Publishing Guidelines</Link>.
                </p>

                <p>
                    We sincerely appreciate your contributions and look forward to building an even more impressive Jira Assistant together. Your dedication strengthens this tool for users worldwide.
                </p>

                <p>
                    Thank you for your commitment to this project.
                </p>
            </section>
        </Layout>
    );
}

export default ContributeToJiraAssistant;

export const Head = () => (<Seo title="Contribution Guidelines" />);
