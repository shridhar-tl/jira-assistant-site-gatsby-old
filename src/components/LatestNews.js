import React from 'react';
import Link from './Link';
import { getDisplayDate } from '../_common/utils';
import messages from '../../static/messages.json';
import './LatestNews.scss';

function getDescription(desc, i) {
    let id, text = desc;

    if (typeof desc === "object") {
        id = desc.id;
        text = desc.text;
    }

    if (id) {
        return <li key={i}><a href={"https://github.com/shridhar-tl/jira-assistant/issues/" + id} target="_blank" rel="noopener noreferrer">#{id}</a> - {text}</li>

    } else {
        return <li key={i}>{text}</li>
    }
}

function renderUpdatesBlock(m) {
    const title = m.title || "Enhancements and bug fixes";

    return <div className="border-bottom py-3">
        <h5 className="my-2 title"><span className="text-sm text-muted">{getDisplayDate(m.date)}</span>: v{m.version} - {title}</h5>
        <ul className="desc">{m.whatsnew.map(getDescription)}</ul>
    </div>
}

function LatestNews({ isEmbeded }) {
    const { notifications = {}, updates_info = [{}] } = messages;
    const notis = Object.keys(notifications);
    notis.sort();
    notis.reverse();

    return (
        <div className="sidebar-updates">
            {/*<SearchBox />*/}

            {!!notis && notis.length > 0 && <div className="latest-updates p-4 mb-3">
                <h5>Latest updates</h5>
                {notis.map(i => <div key={i} className="border-bottom py-3">
                    <h5 className="my-2"><span className="text-sm text-muted">{getDisplayDate(notifications[i].timestamp)}</span> - {notifications[i].title}</h5>
                    <div className="desc">{notifications[i].message}</div>
                </div>)}
            </div>}

            <div className="latest-updates p-4 mb-3">
                <h5>Recent and upcoming changes</h5>
                {renderUpdatesBlock(updates_info[0])}
                {updates_info[0].whatsnew.length < 6 && renderUpdatesBlock(updates_info[1])}
                <div className="lnk-cntr">
                    <Link href="/version-history#latest-updates"
                        external={isEmbeded}
                        className="btn btn-primary pull-right">Read more <span className="fa fa-caret-right" /></Link>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
