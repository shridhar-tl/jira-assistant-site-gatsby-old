import React from 'react';
import classNames from 'classnames';
import { featureList } from '../_common/_constants';
import Link from './Link';
import './AsideMenu.scss';

function AsideMenu(props) {
    const { basePage, featureName, overviewText, rightSided: right, customItems } = props;
    const addIdx = overviewText ? 1 : 0;
    const lastIndex = (customItems?.length || 0) + addIdx + (featureList.length - 1);
    return (
        <aside className={classNames("feature-menu order-lg-1 order-2", { right })}>
            <ul className="pl-0 border rounded mb-50">
                {!!overviewText && <AsideMenuItem
                    item={{ feature: "", title: overviewText }}
                    index={0}
                    featureName={featureName || ""}
                    basePage={basePage}
                    lastIndex={lastIndex} />}
                {featureList.map((f, i) => <AsideMenuItem
                    key={i}
                    item={f}
                    index={i + addIdx}
                    featureName={featureName}
                    basePage={basePage}
                    lastIndex={lastIndex} />)}
                {customItems?.map((f, i) => <AsideMenuItem
                    key={i}
                    item={f}
                    index={featureList.length + addIdx}
                    featureName={featureName}
                    basePage={basePage}
                    lastIndex={lastIndex} />)}
            </ul>
        </aside>
    );
}

export default AsideMenu;

function AsideMenuItem(props) {
    const { lastIndex, featureName, item: f, index: i, basePage } = props;

    return (
        <li key={i} className={classNames({ "border-bottom": i !== lastIndex, active: featureName === f.feature })}>
            <Link className={classNames("d-block font-primary text-dark p-4", { "rounded-bottom": i === lastIndex, "rounded-top": i === 0 })}
                href={basePage + "/" + f.feature}>{f.title}</Link>
        </li>
    );
}
