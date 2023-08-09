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
                    <p className="mb-40">{AppNameLong} places a strong emphasis on the privacy and security of the information you share with us through various channels. It's important for you to comprehend how we collect, use, and safeguard your information. This Privacy Policy pertains to personally identifiable information ("Data") that may be gathered by us when using the extension or visiting our site.</p>
                    <p className="mb-40">This privacy policy applies to Jira Assistant extension, web, cloud, and desktop apps.</p>
                    <p className="mb-40">By submitting personally identifiable information on {AppNameLong}, you consent to the terms of this privacy policy and explicitly agree to the collection and use of your personally identifiable information in line with this policy.</p>
                    <p className="mb-40">This Privacy Policy (last updated on May 01, 2020) doesn't apply to entities not owned or controlled by us, or individuals not part of our development team, agents, or under our control. Please review our Terms & Conditions.</p>

                    <h3>How safe is the data handled by {AppNameLong}?</h3>
                    <p className="mb-40">
                        When it comes to security, it's crucial to understand that Jira Assistant prioritizes your privacy. By default, the tool does not
                        capture or store your credentials. Instead, it collects your Jira server URL that you provide and retrieves essential profile details
                        such as your email address, username, and timezone directly from Jira. This information is stored within your browser's cache, ensuring
                        your data remains localized.
                    </p>
                    <p className="mb-40">
                        The default mode of connecting to Jira is through your browser's built-in authentication. This means that Jira Assistant leverages the
                        existing authentication mechanism of your browser when connecting to Jira.
                    </p>
                    <p className="mb-40">
                        For users who opt for credential-based or OAuth-based authentication with Jira, the tool employs a secure process. In these cases, the relevant information is encoded and stored exclusively within your browser's cache. This approach ensures that your
                        sensitive data remains within your control and is not transmitted or stored externally.
                    </p>
                    <p className="mb-40">
                        Your privacy and data security are paramount to us, and Jira Assistant is designed with these principles in mind.
                    </p>
                    <br />
                    <h3>Data Collection by {AppNameLong} Developer</h3>
                    <p className="mb-40"><strong>Personal Information:</strong> The only personal information collected includes your name and email address.
                        This data is gathered when you voluntarily submit it through the contact us forum. We do not track or maintain this information through
                        any other means. We do not collect additional data such as company or Jira server URL. When you reach out to us, your email address is used
                        solely for responding to your inquiries. All your personal information is securely stored within your browser cache and is not transmitted
                        beyond your browser by this tool.</p>
                    <p className="mb-40"><strong>Non-Personal Information:</strong> Non-Personal Data encompasses information that cannot identify or contact you,
                        such as demographic details (e.g., user IP addresses, country), browser types, and anonymous statistical information related to {AppNameLong}
                        extension usage. Google Analytics, integrated with the extension, is the sole medium for collecting this data.</p>
                    <p className="mb-40">Google Analytics aids us in understanding which modules of the tool are frequently used by users, offering insights based
                        on aggregated country data. Starting from version v1.0, users have the option to disable Google Analytics, depending on their preference.</p>
                    <p className="mb-40">Furthermore, Google Analytics assists in gathering error reports when issues occur while using {AppNameLong}. These reports
                        are crucial for identifying and resolving problems. Typically, these reports do not contain personally identifiable details or your
                        Jira server's information. However, in cases of HTTP errors, there is a remote possibility that certain details may be transmitted if your
                        Jira server responds with such data. No instances of this occurrence have been identified thus far. It's important to note that these error
                        reports are not retained for more than 3 to 6 months, after which they are automatically deleted.</p>
                    <p className="mb-40">
                        <strong>Note:</strong> Neither {AppNameLong} nor its developer assumes responsibility if other malicious software installed
                        by you captures these details from Jira Assistant's browser cache. Users must exercise caution when installing software to ensure their safety.</p>
                    <br />

                    <h3>Disabling Google Analytics</h3>
                    <p className="mb-40">Google Analytics provides valuable insights into the most frequently used features and prevalent issues, contributing to an
                        improved user experience. However, if you choose not to share such information with us, you can easily disable Google Analytics within
                        {AppNameLong} via the Advanced Settings page. Note: This option has been available since {AppNameLong} v1.0.</p>
                    <h3>Data Access</h3>
                    <p className="mb-40">We uphold strict data privacy principles and do not share your personal data in a manner that exposes sensitive information
                        such as email and name (in accordance with applicable laws and regulations). Only authorized {AppNameLong} developers possess access to this data.</p>
                    <h3>Purposes of Data Usage</h3>
                    <p className="mb-40">The collected data is solely used to address your queries or respond to bug reports. We do not utilize this information for
                        advertising or any other unrelated purposes.</p>
                    <h3>Data Retention Period</h3>
                    <p className="mb-40">We retain your contact details for the duration required to resolve your queries or for a maximum of 3 years, whichever is longer.</p>
                    <h3>Restrictions on Personal Data Usage</h3>
                    <p className="mb-40">We unequivocally commit to not sharing, disclosing, selling, renting, or otherwise providing your personal data to external
                        entities for the promotion of their own products or services.</p>
                    <h3>Updates to Privacy Policy</h3>
                    <p className="mb-40">Any modifications or additions to the aforementioned Privacy Policy will be promptly published on this page. Major changes
                        will also be communicated through the extension.</p>
                </div>
            </section>
        </Layout>
    );
}

export default PrivacyPolicy;

export const Head = () => (<Seo title="Extension privacy policy" />);
