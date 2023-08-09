import React from 'react';
import { AppNameLong } from '../_common/_constants';
import Layout from "../layout"
import DonateComponent from '../components/Donate';
import Seo from '../layout/seo';
import './Donate.scss';

function Donate() {
    return (
        <Layout>
            <section>
                <br /><br /><br />
                <h1 className="text-center">Thank you for your interest in donating to us</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-7 col-xs-12 content-block bg-hilight">
                            <div className="mb-40">
                                <h2>Why {AppNameLong} is free?</h2>
                                <p>
                                    The goal behind creating {AppNameLong} is to assist individuals who spend significant time in Jira,
                                    making routine tasks simpler, without the need to invest in expensive software or yearly subscriptions.
                                </p>
                            </div>
                            <br />
                            <div>
                                <h4>Has {AppNameLong} saved you time and streamlined tasks?</h4>
                                <p>If {AppNameLong} has made your tasks easier and saved you time, consider making a donation to access an
                                    even more advanced tool that can further optimize your workflow.</p>
                            </div>
                            <br />
                            <div>
                                <h4>How Will Your Donation Help Us?</h4>
                                <p className="mb-40">
                                    Building and testing {AppNameLong} has required significant time and effort. We are committed to keeping
                                    it up-to-date with changes in Jira, browser APIs, browser updates, and more. Your one-time donation, whether
                                    it's $20 or $30, will motivate us to continue enhancing this tool for your benefit.
                                </p>
                                <br />
                                <p className="mb-40">
                                    While we value the effort put into development, we believe in keeping {AppNameLong} free and without third-party ads that
                                    could inconvenience users. Your contribution ensures that {AppNameLong} remains ad-free, updated, and accessible to all users.
                                </p>
                                <br />
                                <p className="mb-40">
                                    By making a one-time contribution, you're not only investing in your own productivity but also supporting others in accessing
                                    an ever-improving tool. Help us maintain {AppNameLong} as a valuable resource for everyone.
                                </p>
                            </div>
                        </div>
                        <DonateComponent />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
            </section>
        </Layout>
    );
}

export default Donate;

export const Head = () => (<Seo title="Donate" />);
