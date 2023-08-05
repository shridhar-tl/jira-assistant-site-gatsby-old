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
    <p className="fst-italic">Supports generating various reports and customize it the way you would like it</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Generate various reports like Worklog, Sprint, etc</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Estimate vs Actual report with story points or time estimates</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Custom report generation with grouping and expressions</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Status wise time spent report available as gadget</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Bulk import issues</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Out of box support for estimation with inbuilt Poker</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Customizable dashboard / gadgets</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Excel, CSV & PDF exports</h4>
    </div>
</div>);

const tabAssociate = (<div className="tab-pane fade show active">
    <p className="fst-italic">No admin privileges required, install, integrate and start using it to enhance your time tracking experience with Jira</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Use timer for worklog generation</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>
            Easily edit/view worklog from calendar view</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Bulk import worklogs from CSV</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Integration with outlook calendar</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Auto worklog generation for meetings</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Copy / Move worklog with drag and drop</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Edit worklog by resizing in calendar</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Build your own gadgets using custom report or report builder</h4>
    </div>
</div>);

const tabOrgs = (<div className="tab-pane fade show active">
    <p className="fst-italic">Why spend 100&apos;s of dollars every month on commercial products, when Jira Assistant is available for free?</p>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>100% free for commercial use</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Fully open-source product</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>No data collected or stored from your instance of Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Works well with both data center and cloud instance of Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports integrating with multiple instance of Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports installing as App within Jira Cloud</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Various authentication options to integrate with Jira</h4>
    </div>

    <div className="d-flex align-items-center mt-4">
        <i className="bi bi-check2"></i>
        <h4>Supports customized self hosting</h4>
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