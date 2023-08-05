import React, { useCallback, useEffect, useState } from 'react';
import { Urls, WebAppUrl } from '../_common/_constants';
import Link from './Link';

const nav = [
    { text: "HOME", url: "/", exact: true },
    { text: "FEATURES", url: "/features" },
    { text: "FAQ's", url: "/faq" },
    { text: "CONTRIBUTE", external: true, url: Urls.contributeUrl },
    {
        text: "INSTALL", subMenus: [
            { text: "For Chrome", external: true, url: Urls.chromeLink },
            { text: "For Firefox", external: true, url: Urls.firefoxLink },
            { text: "For Edge", external: true, url: Urls.edgeLink },
            { text: "For Opera", external: true, url: Urls.operaLink },
            { text: "Use Web", external: true, url: WebAppUrl },
            { text: "App for Cloud Jira", external: true, url: Urls.jiraCloudApp }
        ]
    },
    {
        text: "MORE", subMenus: [
            { text: "Version history", url: "/version-history#latest-updates" },
            { text: "Known bugs", url: "/version-history" },
            { text: "Source code", external: true, url: Urls.sourcecode },
            { text: "Issue tracker", external: true, url: Urls.issueTracker },
            { text: "Marketplace", external: true, url: Urls.marketPlace },
            { text: "Contact us", url: '/contactus' },
            { text: "Donate", url: "/donate" }
        ]
    }
];

export default function NavBar() {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        if (shown) {
            document.body.classList.add('mobile-nav-active');
        } else {
            document.body.classList.remove('mobile-nav-active');
        }
    }, [shown]);

    const toggle = useCallback(() => setShown(val => !val), [setShown]);

    return (<nav id="navbar" className="navbar">
        <ul>
            {nav.map((m, i) => (<NavItem key={i} item={m} />))}
        </ul>
        <i className={"bi mobile-nav-toggle d-none " + (shown ? 'bi-x' : 'bi-list')} onClick={toggle} />
    </nav>);
}

function NavItem({ item: m }) {
    const isCurrent = false; // To Do
    if (m.subMenus) {
        return (<NavParentItem item={m} />);
    } else {
        return (<li>
            <Link href={m.url} isExternal={m.external}
                className={"nav-link scrollto" + (isCurrent ? ' active' : '')}>{m.text}</Link>
        </li>);
    }
}

function NavParentItem({ item: m }) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded((val) => !val);

    // class "dropdown megamenu" can be used for lange menu items
    // For mega menu, each li can contain multiple items under a Tag
    return (<li className="dropdown">
        <a nohref="true" className={expanded ? 'active' : undefined}
            onClick={toggleExpand}><span>{m.text}</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
        <ul className={expanded ? 'dropdown-active' : undefined}>
            {m.subMenus.map((sm, i) => <NavItem key={i} item={sm} />)}
        </ul>
    </li>);
}