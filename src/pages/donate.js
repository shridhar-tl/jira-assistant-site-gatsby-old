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
                <h1 className="text-center">Thank you for your interest in donating us</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-7 col-xs-12 content-block bg-hilight">
                            <div className="mb-40">
                                <h2>Why {AppNameLong} is free?</h2>
                                <p>
                                    The motive of building {AppNameLong} is to help people who are spending lots of time in Jira to get some simple
                                    things done or spend lots of money in buying a similar software and paying a lump sum for its subscription every year.
                                </p>
                            </div>
                            <br />
                            <div>
                                <h4>Do you think {AppNameLong} saved you some time and helped you to get things easier?</h4>
                                <p>Then it is right time to donate us and get an even better working tool which can save even more of your precious time.</p>
                            </div>
                            <br />
                            <div>
                                <h4>How would my donation be helpful?</h4>
                                <p className="mb-40">
                                    We had spent lots of time and effort in building this tool, testing it. We will also have to keep it updated with
                                    changes in Jira and browser&apos;s API, browser updates, etc. A one-time donation of a small amount like $20 or $30
                                    would encourage us in putting more effort in building an even better working tool for you.
                                </p>
                                <br />
                                <p className="mb-40">
                                    Though we would like to get compensated for the effort we put into development, we are not interested in making
                                    it a paid tool and force our users to pay for it, or integrate a 3rd party Ad&apos;s in the tool and get compensated
                                    by annoying our users.
                                </p>
                                <br />
                                <p className="mb-40">
                                    So, to have your {AppNameLong} always free, Ad free and keep it updated, make a one-time contribution of your
                                    wish and help yourself and others in building a better working tool for ever.
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
