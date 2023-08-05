import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import Link from '../Link';
import './HiddenTips.scss';

const tips = [
    { feature: "dashboard", style: { "color": "#ff689b" }, icon: "bi bi-cash-stack", title: "Edit dashboard name and icon", details: "Clicking on the title in Dashboard lets you to change the name of the dashboard and change its icon as well." },
    { feature: "gadgets", style: { "color": "#e9bf06" }, icon: "bi bi-globe", title: "Custom gadgets", details: "You can use custom reports or report builder and create a report which can be added as gadget in Dashboard" },
    { feature: "dashboard", style: { "color": "#3fcdc7" }, icon: "bi bi-globe", title: "Dashboard: Switch between grid or tabbed layout", details: "You can change the layout of gadgets in dashboard to customize the look and feel." },
    { feature: "calendar", style: { "color": "#d6ff22" }, icon: "bi bi-calendar4-week", title: "Copy or move worklog with drag and drop", details: "In calendar module, you can copy the worklog by pressing Alt key and just drag and drop the worklog." },
    { feature: "dashboard", style: { "color": "#3fcdc7" }, icon: "bi bi-globe", title: "Use dashboard as quick view", details: "You can view the dashboard as popover in browser just by clicking the JA icon. You can set any dashboard as quick view and enable quick view in settings." },
    { feature: "bulk-import", style: { "color": "#4680ff" }, icon: "bi bi-globe", title: "Bulk import: Multi value mapping", details: "While creating sub-tasks using bulk import, you can have ',' separated parent tickets to create same sub-task under multiple tickets. Same logic can be applied for multiple projects." },
    //{ feature: "report", style: { "color": "#ff689b;" }, icon: "bi bi-clock", title: "Worklog report: query based filtering", details: "Tickets pulled for worklog report can be further filtered based on custom query like based on a particular project or issue types, etc.." },
    //{ feature: "", title: "", details: "" }
];

function TipItem({ item }) {
    return (<div className="col-lg-4 col-md-6">
        <div className="icon-box">
            <div className="icon" style={item.style}><i className={item.icon}></i></div>
            <h4 className="title"><Link href={item.url}>{item.title}</Link></h4>
            <p className="description">{item.details}</p>
        </div>
    </div>);
}

export default function HiddenTips() {
    return (<section id="hidden-tips" className="hidden-tips hidden-tips-bg">
        <div className="container">
            <div className="section-header">
                <h2>Did you know?</h2>
                <p>There are multiple small and hidden features in {AppNameLong}. Uncovering that could help you with your day to day activities.</p>
            </div>

            <div className="row">
                {tips.map((tip, i) => <TipItem key={i} item={tip} />)}
            </div>
        </div>
    </section>);
}