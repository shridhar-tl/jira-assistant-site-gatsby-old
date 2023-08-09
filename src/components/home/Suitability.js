import React, { useState } from "react";

export default function Suitability() {
    const [selectedIndex, setSelected] = useState(0);

    return (<div className="col-lg-6">
        <h3 className="pt-0">Suitable for any organizations and all roles</h3>
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

const tabManagers = (<div className="tab-pane fade show active">
    <p className="fst-italic">Dynamic Reporting: Generate a variety of reports tailored to your preferences.</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Comprehensive Insights: Access reports for Worklogs, Sprints, and more.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Effective Project Tracking: Estimate vs. Actual report with story points or time estimates for insightful project tracking.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Custom Insights: Craft custom reports with grouping and expressions to match your unique needs.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Quick Access to Data: Status-wise time spent reports available as convenient gadgets.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Enhanced Data Import: Bulk import issues for quicker data entry and management.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Agile Estimation: Out-of-the-box support for estimation with the built-in planning poker.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Personalized Dashboards: Customize your dashboard and gadgets to optimize your workflow.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Export Versatility: Export data in Excel, CSV, and PDF formats for easy sharing and analysis.</h4>
    </div>
</div>);

const tabAssociate = (<div className="tab-pane fade show active">
    <p className="fst-italic">Effortless Setup: No admin privileges needed; install, integrate, and enhance your Jira time tracking experience seamlessly.</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Intuitive Time Tracking: Utilize the timer for easy and accurate worklog generation.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Visualize with Ease: Edit and view worklogs directly from a user-friendly calendar view.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Streamlined Data Entry: Bulk import worklogs from CSV files for quick data input.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Streamlined Calendar Integration: Automatically generate worklogs for meetings through Outlook calendar integration.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Seamless Worklog Management: Drag and drop to copy, move, and resize worklogs effortlessly.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Personalized Gadgets: Build and customize gadgets using custom reports or the report builder.</h4>
    </div>
</div>);

const tabOrgs = (<div className="tab-pane fade show active">
    <p className="fst-italic">Embrace a cost-effective solution, saving significant expenses on commercial alternatives</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>100% free for commercial use</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Fully Open-Source: Jira Assistant is a fully open-source product, ensuring transparency and reliability.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Data Privacy: Rest easy knowing no data is collected or stored from your Jira instance.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Flexible Compatibility: Works seamlessly with both Jira Data Center and Cloud instances.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Multi-Instance Support: Easily integrate with multiple instances of Jira for streamlined management.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Cloud App Integration: Install as an app within Jira Cloud for enhanced functionality.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Diverse Authentication Options: Choose from various authentication methods for Jira integration.</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Custom Hosting: Supports self-hosting, providing flexibility to suit your organization's preferences.</h4>
    </div>
</div>);

const tabs = [
    {
        text: 'For Associates',
        content: tabAssociate
    },
    {
        text: 'For Managers & PO',
        content: tabManagers
    },
    {
        text: 'For Organization',
        content: tabOrgs
    }
];