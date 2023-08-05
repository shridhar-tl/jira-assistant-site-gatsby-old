import React, { useState } from 'react';
import AnalyticsService, { EventCategory } from '../_services/AnalyticsService';
import { Urls } from '../_common/_constants';

export default function DonateComponent() {
    const [selectedCurrency, setCurrency] = useState(currencies[0].value);
    const $analytics = new AnalyticsService();

    const currencySelected = (val) => {
        setCurrency(val);
        if ($analytics) {
            $analytics.trackEvent("Currency Selected", EventCategory.UserInput, `Currency: ${val}`);
        }
    };

    const paypalClicked = $analytics && (() => $analytics.trackEvent("Paypal button", EventCategory.ButtonClicked));
    const donorboxClicked = $analytics && (() => $analytics.trackEvent("Donorbox button", EventCategory.ButtonClicked, `Currency: ${selectedCurrency}`));

    return (<div className="col-lg-3 col-xs-12 donate-block">
        <div className="donate-cntr">
            <span>Are you a paypal user?</span>
            <a href={Urls.paypalDonate} target="_blank" rel="noopener noreferrer" onClick={paypalClicked}>
                <img className="paypal" src="/images/donate_paypal.png" alt="Donate now" />
            </a>
        </div>
        <div className="seperator"><span>(or)</span></div>
        <div className="donate-cntr">
            <span>Choose your currency to pay:</span>
            <SelectBox dataset={currencies} value={selectedCurrency} valueField="value" onChange={currencySelected} />
            <a className="dbox-button" href={Urls.donorboxUrl + selectedCurrency}
                target="_blank" rel="noopener noreferrer" onClick={donorboxClicked}>Donate</a>
        </div>
    </div>);
}

const currencies = [
    { label: 'US Dollar (USD)', value: 'usd' },
    { label: 'Indian Rupees (INR)', value: 'inr' },
    { label: 'UK Pound (GBP)', value: 'gbp' },
    { label: 'Euro (EUR)', value: 'eur' },
    { label: 'Australian Dollar (AUD)', value: 'aud' },
    { label: 'Brazilian Real (BRL)', value: 'brl' } //,
    //{ label: 'Sri Lanka Rupee (LKR)', value: 'lkr' },
    //{ label: 'Vietnamese Dong (VND)', value: 'vnd' },
    //{ label: 'Hryvnia (UAH)', value: 'uah' },
    //{ label: 'Zloty (PLN)', value: 'pln' }
];

const style = { width: '100%', height: '30px' };
const SelectBox = function ({ dataset = [], valueField = "value", labelField = "label", value = "", onChange }) {
    return (
        <select onChange={(e) => onChange(e.currentTarget?.value)} style={style} value={value}>
            {dataset.map((d, i) => <option key={d[valueField]} value={d[valueField]}>{d[labelField]}</option>)}
        </select>
    );
}