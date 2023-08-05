import React from 'react';
import { AppNameLong, featuresImageList } from '../../_common/_constants';
import './Overview.scss';

export default function Overview(props) {
    const showPreview = null; // To Do

    return (<section id="services" className="services">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>Features Overview</h2>
                <p>Some of the most used and high level unique features of {AppNameLong} are listed below.</p>
            </div>

            <div className="row gy-5">
                {featuresImageList.map((image, i) => <FeatureItem key={i} item={image} index={i}
                    onPreview={showPreview} analytics={props.analytics} />)}
            </div>
        </div>
    </section>);
}

function FeatureItem({ item }) {
    return (<div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
        <div className="service-item">
            <div className="img">
                <img src={item.path} className="img-fluid" alt={item.title} />
            </div>
            <div className="details position-relative">
                <div className="icon">
                    <i className={item.icon}></i>
                </div>
                <a href="#" className="stretched-link">
                    <h3>{item.title}</h3>
                </a>
                <p>{item.details}</p>
                <a href="#" className="stretched-link"></a>
            </div>
        </div>
    </div>);
}