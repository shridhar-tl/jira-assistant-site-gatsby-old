import React from 'react';
import './Achievement.scss';

export default function Achievement() {
    return (<section id="counts" className="counts">
        <div className="container">
            <div className="text-justify title">
                <h3>What we have achieved so far</h3>
                <p>
                    For years, Jira Assistant has been the ultimate destination for seamless time tracking and worklog reporting.
                    Our unwavering dedication to simplifying processes and enhancing user experiences has earned us a prominent place in the industry.
                    As a 100% free and open-source tool, we've consistently provided individuals and teams with a reliable one-stop solution,
                    empowering them to manage their time effectively and achieve their objectives.</p>
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