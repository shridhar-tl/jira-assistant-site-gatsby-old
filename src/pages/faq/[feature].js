import React from 'react';
import Layout from '../../layout';
import faqs from '../../_common/faqs';
import AsideMenu from '../../components/AsideMenu';
import FAQItem from '../../components/FAQItem';
import Seo from '../../layout/seo';
import './FAQ.scss';

const customFeatures = [
    { feature: 'security', title: 'Data & Security' },
    { feature: 'web', title: 'Web' },
    { feature: 'support', title: 'Support' },
    { feature: 'general', title: 'General' },
];

function getFAQs(props) {
    const featureName = props.params?.feature?.toLowerCase();
    const faqList = featureName ? faqs.filter(f => f.feature === featureName) : faqs;

    return { featureName, faqList };
}

function FAQ(props) {
    const { featureName, faqList } = getFAQs(props);

    return (
        <Layout>
            <section id="faq" className="faq">
                <br /><br /><br /><br />
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">
                        <div className="col-lg-9 d-flex flex-column align-items-stretch">
                            <div className="content px-xl-5">
                                <h3>Frequently Asked <strong>Questions</strong></h3>
                            </div>

                            <div className="accordion accordion-flush px-xl-5">
                                {faqList.map((q, i) => <FAQItem key={i} item={q} />)}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <AsideMenu basePage="/faq" featureName={featureName}
                                overviewText="All modules" customItems={customFeatures} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default FAQ;

export const Head = () => (<Seo title="FAQ's" />);
