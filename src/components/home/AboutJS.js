import React from 'react';
import InstallOptions from './InstallOptions';
import Suitability from './Suitability';
import './About.scss';

export default function AboutJS() {
    return (<section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>About Jira Assistant</h2>
                <p>
                    Jira Assistant (Jira Assist or JA in short) is a free and open-source tool which helps Jira users to track work done on timely basis and
                    generate various reports. It is developed in 2016 and is absolutely free for both personal and commercial use.
                    Jira Assistant is available as a browser extension for all major browsers (like Chrome, Firefox, Edge, Opera), available as Jira App
                    for Jira Cloud users and is also hosted as <a href="https://app.jiraassistant.com" target="_blank" rel="noopener noreferrer">static web app</a>.
                    Installation or configuration of this tool does not require any Jira Admin privileges.
                    You can easily install, integrate with Jira and start using it in less than a minute.
                </p>
            </div>

            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
                <Suitability />
                <InstallOptions />
            </div>
        </div>
    </section>);
}
