import React from 'react';
import AsideMenu from '../components/AsideMenu';
import Layout from '.';
import './Feature.scss';

function FeaturesLayout({ children, path }) {
    const featureName = path?.split('/')?.[2];

    return (
        <Layout>
            <section className="features-section">
                <br /><br /><br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AsideMenu rightSided overviewText="Overview" basePage="/features" featureName={featureName} />
                        </div>
                        <div className="col-lg-9">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>);
}

export default FeaturesLayout;