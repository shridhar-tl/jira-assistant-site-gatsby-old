import React from 'react';
import Link from '../components/Link';
import { AppNameLong, WebAppUrl } from '../_common/_constants';
import Layout from '../layout';
import Seo from '../layout/seo';

function WebVersionContent() {
    return (
        <Layout>
            <div className="container">
                <br /><br /><br /><br /><br />
                <h1>Unleash the Power of {AppNameLong} Web Version: Experience Quicker Bug Fixes and Updates!</h1>
                <br />
                <p>
                    Are you ready to take your Jira experience to the next level? Introducing the {AppNameLong} Web Version – your gateway
                    to seamless integration with Jira's powerful capabilities, all with the added advantage of quicker bug fixes and updates.
                </p>
                <br />
                <h2>Why Choose {AppNameLong} Web Version?</h2>
                <p>
                    Imagine having a tool that not only enhances your Jira experience but also ensures you receive the latest fixes and updates
                    faster than ever before. The {AppNameLong} Web Version offers you this unique advantage, making it the ideal choice for
                    users who value efficiency, continuous improvements, and a hassle-free experience.
                </p>
                <br />
                <h2>Benefits You Can't Ignore:</h2>
                <ol>
                    <li>
                        <strong>Swift Bug Fixes:</strong> With the Web Version, you become an integral part of our bug identification and resolution
                        process. More users mean more chances of identifying and fixing bugs swiftly, ensuring a smoother experience for everyone.
                    </li>
                    <li>
                        <strong>Immediate Updates:</strong> Say goodbye to waiting for the next release! Our Web Version allows us to deploy updates
                        and enhancements in real-time, ensuring you're always on the cutting edge of Jira capabilities.
                    </li>
                    <li>
                        <strong>Enhanced Flexibility:</strong> Whether you're in the office, on the go, or working remotely, the {AppNameLong} Web Version
                        is accessible from anywhere with an internet connection. No installation hassles, no limitations – just unparalleled flexibility.
                    </li>
                    <li>
                        <strong>Seamless Switching:</strong> Already using the {AppNameLong} Extension? Switching to the Web Version is a breeze.
                        No reintegration or reconfiguration is required, and you can switch back to the Extension at any time without losing any
                        configuration changes or data.
                    </li>
                </ol>
                <br />
                <h2>How to Get Started:</h2>
                <p>
                    Trying out the {AppNameLong} Web Version is as easy as it gets. Simply navigate to the web app, and you're ready to dive into
                    a world of efficient collaboration and enhanced project management.
                </p>
                <br />
                <div>
                    <ol>
                        <li>Visit the <Link href={WebAppUrl}>{AppNameLong} Web Version</Link> and explore its features.</li>
                        <li>Experience the power of quicker bug fixes and updates firsthand.</li>
                        <li>Enjoy the flexibility of accessing your Jira insights anytime, anywhere.</li>
                    </ol>
                </div>
                <br />
                <h2>Join the Movement:</h2>
                <p>
                    By choosing the {AppNameLong} Web Version, you're not just benefiting from an exceptional tool – you're becoming an essential
                    part of a dynamic user community that drives innovation and ensures a seamless experience for everyone.
                </p>

                <p>
                    Ready to experience the future of Jira integration? Try the <Link href={WebAppUrl}>{AppNameLong} Web Version</Link> today
                    and unlock the potential of faster bug fixes and updates.
                </p>

                <p>
                    <strong><Link href={WebAppUrl}>Experience {AppNameLong} Web Version</Link></strong>
                </p>
                <br /><br /><br />
            </div>
        </Layout>
    );
}

export default WebVersionContent;

export const Head = () => (<Seo title="Jira Assistant Web" noAppend />);