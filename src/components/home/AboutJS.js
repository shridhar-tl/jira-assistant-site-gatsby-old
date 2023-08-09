import React from 'react';
import InstallOptions from './InstallOptions';
import Suitability from './Suitability';
import './About.scss';
import { AppNameLong } from '../../_common/_constants';
import Link from '../Link';

export default function AboutJA() {
    return (<section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>About Jira Assistant</h2>
                <p>
                    Jira Assistant (Jira Assist or JA for short) is a robust, free, and open-source tool that empowers Jira users by providing efficient
                    work tracking capabilities and the ability to generate various reports. Since its inception in 2016, Jira Assistant has been
                    dedicated to enhancing the project management experience for both personal and commercial purposes.
                </p>
                <p>
                    Jira Assistant offers diverse installation options to cater to your specific needs. These options include seamless
                    integration into your daily browser activities across major platforms such as Chrome, Firefox, Edge, and Opera.
                    You can also elevate your Jira Cloud experience by incorporating Jira Assistant as an app tailored to optimize productivity
                    and streamline workflow. Additionally, you have the flexibility to explore Jira Assistant's capabilities as a user-friendly
                    static web app hosted at https://app.jiraassistant.com.
                </p>
                <p>
                    Installing and configuring Jira Assistant is effortless, requiring no Jira Admin privileges. This quick integration allows you
                    to seamlessly incorporate the tool into your workflow, providing immediate access to its features in a matter of minutes.
                </p>
                <p>
                    Whether you choose the browser extension route, opt for the Jira Cloud app integration, or explore the web app, Jira Assistant
                    ensures a consistent and smooth experience across a variety of browsers, devices, and Jira instances. Discover the power of
                    efficient work tracking and comprehensive reporting with Jira Assistant today!
                </p>
                <p>
                    Discover more about {AppNameLong}'s installation methods, and authentication options on our dedicated <Link href="/install-options">Install
                        and Authentication Options</Link> page.
                    Tailor your experience to your needs by exploring the diverse ways you can integrate {AppNameLong} with your Jira workflow.
                </p>
            </div>

            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                <Suitability />
                <InstallOptions />
            </div>
        </div>
    </section>);
}
