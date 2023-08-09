import React from 'react';
import { Urls, WebAppUrl } from '../../_common/_constants';
import './Banner.scss';

export function Banner() {
    const appDetails = [
        { key: 'web', text: 'Web version', url: WebAppUrl, title: 'Available as Web Version (no install)' },
        { key: 'chrome', text: 'Chrome', url: Urls.chromeLink },
        { key: 'edge', text: 'Edge', url: Urls.edgeLink },
        { key: 'firefox', text: 'Firefox', url: Urls.firefoxLink },
        { key: 'opera', text: 'Opera', url: Urls.operaLink, style: { height: '30px' } },
        { key: 'jcloud', text: 'Jira Cloud App', title: 'Install within Jira Cloud', url: Urls.jiraCloudApp, style: { height: '30px', borderRadius: '25%' } },
        { key: 'windows', text: 'Windows', title: 'Windows desktop app (Coming Soon)', url: null }
    ];

    return (<section id="hero" className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Easy Installation & Quick Integration</h1>
                    <h2>Choose between a single-click browser extension integration for quick Jira connectivity or install it as a Jira Cloud App, benefiting all users. Get up and running in under a minute, simplifying work tracking and reporting effortlessly.</h2>
                    <div className="available-for">
                        <h2>Available for</h2>
                        {appDetails.map(ci => {
                            const img = (<img key={ci.key} src={`/icons/${ci.key}.png`} title={ci.title || `Install for ${ci.text}`} alt="" style={ci.style} />);
                            if (!ci.url) {
                                return img;
                            } else {
                                return (<a key={ci.key} href={ci.url} target="_blank" rel="noopener noreferrer" title={ci.title || `Install for ${ci.text}`}>{img}</a>);
                            }
                        })}
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="/images/worklog.png" className="img-fluid banner-img" alt="" />
                </div>
            </div>
        </div>
    </section>);
}

export default Banner;