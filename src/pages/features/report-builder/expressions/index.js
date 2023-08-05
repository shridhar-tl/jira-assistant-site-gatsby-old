import React from 'react';
import Link from '../../../../components/Link';
import FeaturesLayout from '../../../../layout/FeaturesLayout';

const html = (<div>
    <h2>Expressions</h2>
    <p className="mb-40">
        Expressions are widely used throughout reports to retrieve, calculate, display, group, sort,
        filter, parameterize, and format data.
        <br /><br />
        Many report item properties can be set to an expression. Expressions help you control the content, design,
        and interactivity of your report. Expressions are written in JavaScript, saved in the report
        definition, and evaluated by the report processor when you run the report.
        <br /><br />
        Unlike applications such as Microsoft Office Excel where you work with data directly in a worksheet, in
        a report, you work with expressions that are placeholders for data. To see the actual data from the evaluated
        expressions, you must preview the report. When you run the report, the report processor evaluates each
        expression as it combines report data and report layout elements such as tables and charts.
        <br /><br />
        As you design a report, many expressions for report items are set for you. For example, when you drag a
        field from the dataset to a table cell on the report design surface, the text box value is set to a
        simple expression for the field. In the sample video, the ticketsList dataset displays the fields
        summary, issuetype, created, reporter, priority, etc.. Some of the fields like key, issuetype, summary, etc.
        has been added to the table. The notation [key] on the design surface represents the underlying expression =Fields.key.
    </p>

    <ul>
        <li>Any valid JavaScript expression syntax can be used in expressions.</li>
        <li>To access all the available fields, &quot;Fields&quot; object can be used. (Eg: Fields.summary, Fields.created.name)</li>
        <li>Additionally, in Custom Report, to access current field, &quot;this&quot; can be used.</li>
        <li>Some of the native functions and custom utility functions are available within expressions.</li>
        <li>If an object is returned by the expression, then it is converted as JSON and displayed within the cell.</li>
    </ul>

    <h3>Native functions</h3>
    <p className="mb-40">
        <ul>
            <li>Some of the JavaScript native functions are available for use directly in expressions.</li>
            <li>Available Functions List: parseInt, parseFloat, isNaN, Math.*, Date, Number</li>
        </ul>
    </p>

    <h3>Utility functions</h3>
    <p className="mb-40">
        Utility functions are set of pure functions which lets the user to use it in expressions to do some common tasks. This utility
        functions are further classified as Common functions and My functions. Common functions are by default provided by report builder
        which are common for all the reports. Report builder also allows the user to write their own functions and use it in expressions
        which are categorized under My functions. You can read more about <Link href="/features/report-builder/expressions/functions">Common functions here</Link>.
        <br /><br />
        <strong>Note:</strong> As of now, user defined functions (My functions) would not work if you are using Jira Assistant as a browser extension.
        But it would work in Web version and desktop versions.
        <br /><br />
        <strong>Syntax:</strong> <span className="expr-sample">CommonFunctions.formatDate(new Date())</span><br />
        <strong>Syntax:</strong> <span className="expr-sample">MyFunctions.getSomeData()</span><br />
    </p>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
