import React from 'react';
import Link from '../../../../components/Link';
import FeaturesLayout from '../../../../layout/FeaturesLayout';

const html = (<div>
    <h2>UI Components</h2>
    <p className="mb-40">
        Report items are the primary UI components for building the reports. Report builder support multiple UI elements which can be
        dragged and dropped to report display and can be configured to generate graphical or tabular reporting.
    </p>

    <h3>Table</h3>
    <p className="mb-40">
        Table report item is used to display data in a tabular format. You will be able to show dynamic or static data using the
        table report item. To learn more about table refer <Link href="/features/report-builder/ui-elements/table">Table Report Item</Link>
        <br /><br />
        To show dynamic rows you will have to use row groups and similarly to show dynamic columns you will have to use column groups.
        To add a group right click on the row / column header and click Insert Group from the context menu.
    </p>

    <h3>Image</h3>
    <p className="mb-40">
        You can add image as an independent report item or add image inside a table cell so show it as an icon. You can use expressions
        to provide dynamic image url from any property of the image including the source url.
    </p>

    <h3>Text / Headers</h3>
    <p className="mb-40">
        You can add text / headers as an report item. You can populate the content either through expressions or as a hardcoded text.
    </p>

    <h3>Tab view</h3>
    <p className="mb-40">
        Tab view component lets you add multiple tab pages and you can visualize data on different tabs.
    </p>

    <h3>Chart</h3>
    <p className="mb-40">
        Multiple types of charts are supported. You can use a dataset data to provide data to chart and display it.
    </p>

    <h3>Container</h3>
    <p className="mb-40">
        Container is not a visual component. It is primarily for grouping the other components logically. However you can also
        utilize it to size the components based on UI grid system by changing the size property.
    </p>

    <h3>Collapsible panel</h3>
    <p className="mb-40">
        A simple collapsible container component. This would be primarily helpful if the report is too big and you have multiple
        UI elements added to report.
    </p>

    <h3>Horizontal line</h3>
    <p className="mb-40">
        Horizontal line is a simple line component which would draw a horizontal line between two components for visual separation
    </p>

    <h3>Menu items</h3>
    <p className="mb-40">
        This component would help you to add a menu to the report and show it when clicking on a specific element. This would
        be helpful to open a Jira url, bookmark a ticket or for any other user interactions.
    </p>

    <h3>Repeater</h3>
    <p className="mb-40">
        This is a container component which would repeat itself for each data in provided dataset. All the components placed
        inside this component would be repeated and you can place appropriate component to display the data.
    </p>

    <h3>Sub report</h3>
    <p className="mb-40">
        Sub report component lets you include another report inside current report. You can either let the sub report fetch its own data
        based on the parameters you pass or you can pass the data itself to sub reports. This would be primarily useful for drill down reports
    </p>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
