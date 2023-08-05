import React from "react";

function FAQItem({ item: q }) {
    const [expanded, toggle] = React.useState(false);
    const toggleItem = () => toggle(cur => !cur);

    return (<div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
        <h3 className="accordion-header">
            <button className={"accordion-button" + (expanded ? '' : ' collapsed')} type="button" onClick={toggleItem}>
                <i className="bi bi-question-circle question-icon"></i>
                {q.questions.map((qs, i) => (<span key={i} className={i === 0 ? "" : "d-none"}>{qs}</span>))}
            </button>
        </h3>
        <div className={"accordion-collapse" + (expanded ? '' : ' collapse')}>
            <div className="accordion-body">
                {q.answer}
            </div>
        </div>
    </div>);
}

export default FAQItem;