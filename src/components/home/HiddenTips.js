import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import Link from '../Link';
import './HiddenTips.scss';

const tips = [
    { feature: "dashboard", style: { "color": "#ff689b" }, icon: "bi bi-cash-stack", title: "Edit dashboard name and icon", details: "You can change the dashboard's name and icon by clicking on its title in the Dashboard section." },
    { feature: "gadgets", style: { "color": "#e9bf06" }, icon: "bi bi-globe", title: "Custom gadgets", details: "By utilizing custom reports or the report builder, you can craft a report that can later be used as a gadget within your Dashboard." },
    { feature: "dashboard", style: { "color": "#3fcdc7" }, icon: "bi bi-globe", title: "Dashboard: Switch between grid or tabbed layout", details: "Customize the appearance of your dashboard gadgets by adjusting the layout to suit your preferences." },
    { feature: "calendar", style: { "color": "#d6ff22" }, icon: "bi bi-calendar4-week", title: "Copy or move worklog with drag and drop", details: "In the Calendar module, quickly copy worklogs by holding the \"Alt\" key and dragging them to new dates." },
    { feature: "dashboard", style: { "color": "#3fcdc7" }, icon: "bi bi-globe", title: "Use dashboard as quick view", details: "Experience quick dashboard access as a popover by clicking the JA icon and enabling quick view in settings." },
    { feature: "bulk-import", style: { "color": "#4680ff" }, icon: "bi bi-globe", title: "Bulk import: Multi value mapping", details: "For bulk sub-task creation, use ',' separated parent tickets to create sub-tasks under multiple tickets or projects." },
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
                <p>
                    Within {AppNameLong}, a treasure trove of small and hidden features awaits your exploration. Delve into these hidden gems
                    to uncover tools and functionalities that can significantly enhance your day-to-day activities within Jira. These valuable features,
                    though discreetly tucked away, can have a substantial impact on improving your efficiency and effectiveness as you navigate through
                    various tasks and projects. Don't miss out on the opportunity to harness these hidden capabilities and elevate your Jira experience
                    to new heights.
                </p>
            </div>

            <div className="row">
                {tips.map((tip, i) => <TipItem key={i} item={tip} />)}
            </div>
        </div>
    </section>);
}