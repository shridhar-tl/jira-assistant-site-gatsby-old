import React from 'react';
import Layout from '../layout';
import Seo from "../layout/seo";
import { Urls } from '../_common/_constants';
import LatestNews from '../components/LatestNews';
//ToDo: searchParams need to be pulled properly
function ContactUs({ searchParams }) {
    return (
        <Layout>
            <section className="contactus-section">
                <div className="container">
                    <br /><br />
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Want to report a bug, suggest a new feature or have a question?</h1>
                            <h2>Before you begin</h2>
                            <ul>
                                <li>Have a look at FAQ, Known Bugs and Features session and see if your question is already answered</li>
                                <li>Do a quick search through the Issue Tracker to see if similar ticket is already been raised by others</li>
                                <li>Don&apos;t forget to view the closed issues as well which may have your queries already answered</li>
                            </ul>

                            <h2><a href={Urls.issueTracker} target="_blank" rel="noopener noreferrer">Use GitHub Issue tracker</a></h2>
                            <p>Please post your queries in <a href={Urls.issueTracker} target="_blank" rel="noopener noreferrer">GitHub Issue Tracker <span className="fa fa-external-link" /></a></p>
                            <p>If you find an existing ticket which is similar to your&apos;s then just do +1 / thumbsup on that ticket with comments if any, to increase the popularity.</p>
                            <p>The most popular issues and the one with proper description / scenarios are addressed first. So, don&apos;t forget to provide all the necessary descriptions / screenshots which is required by the developers to reproduce / resolve it.</p>

                            <h2>No GitHub Account?</h2>
                            <p>
                                If you do not have a GitHub account and not willing to create one, then you can use the below Url to Contact Us which wont require any authentication.
                                But we would strongly suggest to use the Issues tab instead as it would be easy for you to have a track of the issue and see the status / updates on the issues.</p>
                            <p>
                                Use this <ExternalForm query={searchParams}>form</ExternalForm> as an alternate option to get in touch with us.
                                But remember this form is less frequently monitored and expect a delayed response.</p>
                        </div>
                        <div className="col-lg-4">
                            <LatestNews isEmbeded={searchParams?.emb === 'true'} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ContactUs;

export const Head = () => (<Seo title="Contact Us" />);

function ExternalForm({ children, query }) {
    return (<a href={prepareUrlWithQueryString(Urls.contactUs, query)} target="_blank" rel="noopener noreferrer">{children} <span className="fa fa-external-link" /></a>);
}

function prepareUrlWithQueryString(url, params) {
    params = encodeAsQuerystring(params);
    return `${url}${params ? "?" : ""}${params}`;
}

function encodeAsQuerystring(params) {
    if (!params) {
        return '';
    }

    return Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join('&');
}
