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
        <h4>Seamless Browser Integration: Available for leading browsers – Chrome, Edge, Firefox, and Opera.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Jira Compatibility: Supports both Cloud and Data Center editions of Jira.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Authentication Flexibility: Compatible with various authentication mechanisms such as oAuth 2, forms authentication, and basic authentication.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Simple Installation: No admin access or special permissions required for installation.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Offline Usage: Works offline without requiring an internet connection post-installation.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Enhanced Jira Integration: Injects quick icons for timer functionality directly into Jira boards and issues.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Effortless Integration: Quick installation and smooth integration for immediate use.</h4>
    </div>
</div>);

const webApp = (<div className="tab-pane fade show active">
    <p className="fst-italic">Use it as website hosted without installing anything</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Hassle-Free Access: No installation required – access via any browser as a hosted website.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Data Privacy Assurance: No data collection or storage outside your browser.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Hosting Details: Hosted as a static site within GitHub without the need for a backend server.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Authentication Support: Compatible with oAuth and basic authentication with Jira.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Custom Hosting: Supports customized self-hosting as an internal website within your organization.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Cross-Device Usability: Access from any browser and device, ensuring flexibility.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Extension Integration: Integrates with the extension if installed, staying updated with the latest fixes and updates.</h4>
    </div>
</div>);

const cloudApp = (<div className="tab-pane fade show active">
    <p className="fst-italic">Install within your Jira Cloud as you would any other marketplace app</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Enhanced Accessibility: Seamlessly accessible for your entire organization within your Jira instance.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Data Privacy Commitment: No data collection or storage beyond your browser.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Out-of-Box Gadgets: Multiple pre-built gadgets available for effortless integration into your Jira dashboard.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Issue-Level Integration: Adds time tracking functionality directly within Jira issue pages.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Jira Admin Privilege: Requires Jira Admin privilege for initial installation only.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Timely Updates: Receive more frequent updates compared to browser extensions.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Compact Custom Version: Custom-built for cloud Jira, ensuring optimal performance.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Feature Control: Enables monitoring and control of feature upgrades for a tailored experience.</h4>
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