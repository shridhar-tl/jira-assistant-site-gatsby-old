import React, { useState } from "react";

export default function InstallOptions() {
    const [selectedIndex, setSelected] = useState(0);

    return (<div className="col-lg-6">
        <h3 className="pt-0">Choose how you would like to use it</h3>
        <ul className="nav nav-pills mb-3">
            {tabs.map((tab, i) => (<li key={i}>
                <a className={"nav-link" + (selectedIndex === i ? ' active' : '')}
                    data-bs-toggle="pill"
                    onClick={() => setSelected(i)}>{tab.text}</a>
            </li>))}
        </ul>

        <div className="tab-content">
            {tabs[selectedIndex].content}
        </div>
    </div>);
}

const browserExtension = (<div className="tab-pane fade show active">
    <p className="fst-italic">Install it within your browser as extension</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Available for all major browser like Chrome, Edge, Firefox and Opera</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports both cloud and data center edition of Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports all authentication mechanism like oAuth 2, forms authentication, basic authentication using credentials</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>No admin access or special permissions required</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Works offline, without need for internet after installation</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports injecting quick icons for timer functionality to Jira board and issues</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Quick installation and seamless integration</h4>
    </div>
</div>);

const webApp = (<div className="tab-pane fade show active">
    <p className="fst-italic">Use it as website hosted without installing anything</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>No installation required, access just like any other website on the go via internet</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Does not collet or store any information outside your browser</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Hosted as static site within GitHub with no backend server</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports oAuth and basic authentication with Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports customized self hosting within your organization as an internal website</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Use it from any browser and from any device</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Integrates with extension if available and would always be up to date with recent fixes and updates</h4>
    </div>
</div>);

const cloudApp = (<div className="tab-pane fade show active">
    <p className="fst-italic">Install it within your cloud Jira like any other marketplace app</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Install it within your Jira and let everyone within your organization use it seamlessly</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Do not collect or store any data outside your browser</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Multiple out of box gadgets available to add within your Jira dashboard</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Adds time tracking feature within issues page of Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Needs Jira Admin privilege for one time installation</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Receive more frequent updates than browser extension</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Compact custom built version for cloud Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports monitoring and controlling of feature upgrades</h4>
    </div>
</div>);

const tabs = [
    {
        text: 'Browser Extension',
        content: browserExtension
    },
    {
        text: 'Web',
        content: webApp
    },
    {
        text: 'Cloud App',
        content: cloudApp
    }
];