import React from 'react';
import { Urls, WebAppUrl } from '../_common/_constants';
import Link from '../components/Link';
import './Footer.scss';

function Footer() {
    return (<footer id="footer" className="footer">
        <div className="footer-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>Jira Assistant</h3>
                            <p><strong>Email:</strong> shridhar.tl@gmail.com<br /></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/faq">FAQ</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/contactus">Contact us</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/donate">Donate</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/version-history#latest-updates">Version History</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/version-history">Known bugs</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/privacy-policy">Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>External Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.sourcecode}>View Source code</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.issueTracker}>View Issue tracker</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.marketPlace}>Visit Marketplace</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.contributeUrl}>Contribution guidelines</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.reportIssue}>Report an issue</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Install Jira Assist</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.chromeLink}>As Chrome Extension</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.edgeLink}>As Edge Extension</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.firefoxLink}>As Firefox Extension</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.operaLink}>As Opera Extension</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={WebAppUrl}>Use Web version</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href={Urls.jiraCloudApp}>As Jira Cloud App</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link href="/install-options">Know what suits you</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-legal text-center">
            <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                <div className="d-flex flex-column align-items-center align-items-lg-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Jira Assistant</span></strong> 2016 - {new Date().getFullYear()}. All Rights Reserved
                    </div>
                    <div className="credits">
                    </div>
                </div>

                <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                    <Link href={Urls.twitterShare} className="twitter"><i className="bi bi-twitter" /></Link>
                    <Link href={Urls.facebook} className="facebook"><i className="bi bi-facebook" /></Link>
                    <Link href="/" className="instagram"><i className="bi bi-instagram" /></Link>
                    <Link href={Urls.gMailShare} className="google-plus"><i className="bi bi-envelope" /></Link>
                    <Link href={Urls.linkedin} className="linkedin"><i className="bi bi-linkedin" /></Link>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;