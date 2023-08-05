import React from 'react';
import Layout from '../layout';
import Seo from '../layout/seo';
import { AppNameLong } from '../_common/_constants';

function PrivacyPolicy() {
    return (
        <Layout>
            <section className="pb-40">
                <br /><br /><br /><br />
                <div className="container">
                    <h2 className="mb-10">Privacy Policy - ({AppNameLong})</h2>

                    <h3>Introduction</h3>
                    <p className="mb-40">{AppNameLong} values the privacy and security of the information seriously that you share with us through any medium. It is important that you understand how we collect, use, and maintain your information. This Privacy Policy deals with personally identifiable information (referred to as &quot;Data&quot; below) that may be collected by us while using the extension or on our site.</p>
                    <p className="mb-40">This privacy policy is applicable for Jira Assistant extension, web, cloud and desktop apps as well.</p>
                    <p className="mb-40">By submitting personally identifiable information on {AppNameLong}, you agree to the terms of this privacy policy and you explicitly consent to the collection, use of your personally identifiable information in accordance with this privacy policy.</p>
                    <p className="mb-40">This Privacy Policy (last updated on May 01, 2020) does not apply to other entities that we do not own or control or persons that are not part of our development team, agents or within our control. Please take time to read our Terms & Conditions.</p>

                    <h3>How safe is the data handled by {AppNameLong}?</h3>
                    <p className="mb-40">When it comes to security, first thing to be clear is, {AppNameLong}, by default does not capture or store your credentials. It only captures your Jira server URL provided by you and it fetches your profile information like email address, user name and timezone from Jira and store it in browsers cache. By default, to connect to Jira, it just uses your browsers authentication with Jira.
                        When you use credential based authentication or oAuth authentication with Jira, this tool stores those information (encoded, but not encrypted) within your browser cache and no where else.</p>

                    <h3>What information is collected by developer from users of {AppNameLong}?</h3>
                    <p className="mb-40"><strong>Personal Information:</strong> The personal information includes just your name and email address. Such information is only collected from you if you voluntarily submit it to us through contact us forum. We do not maintain or track it through any other medium. No other information like company or Jira server URL is collected by developer. Only when you try to contact us, we get your email address just to respond you back. So, all your personal information&apos;s are safe in your browser cache and is not sent anywhere outside of your browser by this tool.</p>
                    <p className="mb-40"><strong>Non-Personal Information:</strong> The Non-Personal Data includes information that cannot be used to identify or contact you, like demographic information, for example, user IP addresses, country, browser types and other anonymous statistical information that includes the use of {AppNameLong} extension. From extension Google Analytics is the only medium through which we collect this data.</p>
                    <p className="mb-40">We use Google analytics to capture which module of the tool is being used much by users and that too only in aggregate based on country. From versions v1.0 Google Analytics can also be disabled and it is your wish whether to enable it on not.</p>
                    <p className="mb-40">Similarly we use Google Analytics to collect errors occurred while using {AppNameLong}. We use this error report just to identify and fix the issue. Usually this should not contain any details which is personally identifiable or your Jira server&apos;s details. But in case of http errors, if your Jira server responds with any such details, there is a possibility that, it is being sent to us. So far no such instances were identified where Jira returns such details. But these error reports are not maintained longer than 3 to 6 months and after which these are deleted automatically.</p>
                    <p className="mb-40"><strong>Note:</strong> {AppNameLong} or its developer is not responsible if some other malicious software installed by you captures these details from your cache. Hence it is the responsibility of users to be safe when installing software&apos;s.</p>

                    <h3>How can I disable Google Analytics</h3>
                    <p className="mb-40">These analytics helps us to identify the most used features and issues which helps us provide better working experience for you. But if you no longer wish to share such information with us, then you can disable it from {AppNameLong} through Advance Setting page. Note: This feature is only available since {AppNameLong} v1.0.</p>

                    <h3>Who has the access to your data</h3>
                    <p className="mb-40">We do not share your personal data with any third-party in a way that reveals your personal information like email and name (subject to laws and regulations). Only {AppNameLong} developers have access to these data.</p>

                    <h3>What purposes your data are used for</h3>
                    <p className="mb-40">This is just used to reply to you when you contact us for any queries or reporting bugs. We do not use it for advertising or any other purpose.</p>

                    <h3>How long we retains your information</h3>
                    <p className="mb-40">We retain your contact details till the time we resolve your queries or for maximum of 3 year which ever is higher.</p>

                    <h3>What we don’t do with your personal data</h3>
                    <p className="mb-40">We do not and will never share, disclose, sell, rent, or otherwise provide your personal data to other companies for the marketing of their own products or services.</p>

                    <h3>What if we make changes to our Privacy Policy</h3>
                    <p className="mb-40">Any change made or any new point added to the Privacy Policy described above will be published here on this page. The major changes will also be informed through extension.</p>
                </div>
            </section>
        </Layout>
    );
}

export default PrivacyPolicy;

export const Head = () => (<Seo title="Extension privacy policy" />);
