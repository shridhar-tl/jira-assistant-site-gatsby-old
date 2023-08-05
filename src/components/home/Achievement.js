import React from 'react';
import './Achievement.scss';

export default function Achievement() {
    return (<section id="counts" className="counts">
        <div className="container">
            <div className="text-center title">
                <h3>What we have achieved so far</h3>
                <p>Jira Assistant being a 100% free & open source tool, has been a one stop shop for time tracking and worklog reporting over years.
                    We have simplified the tedious time tracking process to enhance user experience.</p>
            </div>

            <div className="row counters position-relative">
                <div className="col-lg-3 col-6 text-center">
                    <span className="rating">4.9<img src="/icons/star.svg" alt="5 Star" /></span>
                    <p>End user rating</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span className="userbase">100k+</span>
                    <p>Happy users</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span className="orgs">100+</span>
                    <p>Organizations</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                    <span className="years">{(new Date().getFullYear() - 2017)}+</span>
                    <p>Years of existence</p>
                </div>
            </div>
        </div>
    </section>);
}