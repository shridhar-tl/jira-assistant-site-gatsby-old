import React from 'react';
import { AppNameLong } from '../../../_common/_constants';
import Link from '../../../components/Link';
import FeaturesLayout from '../../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Reports overview" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/HMyBkaZ09Xw?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>

    <h2>Report Builder</h2>
    <p className="mb-40">
        &quot;Report Builder&quot; can be used by users with some technical knowledge to develop their own report. Using report builder module, almost any kind of simple to advanced reports can be developed.
        It supports getting various type of input from users, adding validation on input parameters, execute one or more JQL using the input parameters and get data from Jira, process the data in a way you would use it and display it as report.
        <br /><br />
        Some of the features supported by Report Builder are as follows.
        <br /><br />
    </p>
    <ul>
        <li><strong>Parameters</strong> with different datatypes like date, date range, text, numbers, etc. can be add and user can input the value at the time of generating the report</li>
        <li>One or more <strong>JQL</strong> query can be executed in Jira and data can be used to generate report.</li>
        <li>One or more UI components like Table, Images, Charts, etc., can be dragged and dropped to report and configure it to represent the data.</li>
        <li>Table UI component allows you to create column and row grouping based on records.</li>
        <li>You can also add custom menus to grid similar to how gadgets in {AppNameLong} contains it.</li>
    </ul>

    <h3>Parameters</h3>
    <p className="mb-40">
        Parameters are the primary way through which users interact with report to provide input to the report. Parameters support
        input through multiple type of form fields like text box / masked text or numeric input through text box, selection of items through
        dropdown or autocomplete, date or date range selection through calendar, boolean value checkbox, user groups, and selection of file as well.
        <br /><br />
        Parameter can be mandatory or non mandatory and can have default values as well which would be automatically populated.
        If a parameter is added to a report, then it can be used in any expressions within the report. To use a parameter in
        expressions use <span className="expr-sample">Parameters.paramName.value</span>. The &quot;paramName&quot; would be name of the
        parameter you provide while creating the parameter.
        <br /><br />
        Most of the times, while you add JQL datasets, you may need to use report parameter values in JQL. Hence you would be able to use
        parameters as well in JQL instead of hardcoded values. To use parameters in JQL use the following syntax:
        <span className="expr-sample">@Parameters.paramName.value$</span>. As parameter values are always available only while running
        the report and not at design time while you create a report / adding dataset, you may need to provide default value for parameter
        along with JQL which would be used used at design time and while report generation, value provided by user is used. To provide
        default value along with parameter use the following syntax: <span className="expr-sample">@Parameters.paramName.value|someDefaultValue$</span>.
    </p>

    <h3>Expressions</h3>
    <p className="mb-40">
        Expressions can be used to customize the appearance and convert / format the data the way you would
        like it to appear in reports. Please click here to know more about <Link href="/features/report-builder/expressions">expressions</Link>
    </p>

    <h3>Global fields</h3>
    <p className="mb-40">
        Global fields are some of the constant values which can be used in expressions of any components. These fields are further
        classified as Report fields and Report state:
        <br /><br />
        <strong>Report fields</strong> are built-in fields provided by Jira Assistant which would primarily contain the user configurations like date formats,
        etc which can be used to format data or for other validations.
        <br /><br />
        <strong>Report states</strong> are user defined fields added by users either as a constant value or can be expressions which is derived at runtime.
        It is up to the user what kind of data is stored in these fields. These fields can be used in any other expressions.
        Report states can be used in expressions using the following syntax: <span className="expr-sample">ReportState.propName</span>.
    </p>

    <h3>Datasets</h3>
    <p className="mb-40">
        Datasets are the collection of data maintained as JavaScript objects. This data source can be used by the tables to bind data in
        tabular format along with groups, and also can be used by expression to resolve a specific value. The source of dataset can be
        from various ways like through http request, from files, through expressions, JQL, etc.
        <br /><br />
        Dataset may contain, row groups, column groups, variables and data. Once you assign a dataset to a specific group under the table,
        you will be able to access those data from within the rows / columns under that group.
        To access the row group you may use <span className="expr-sample">RowGroup</span> and similarly you can use <span className="expr-sample">ColGroup</span>
        and <span className="expr-sample">Variables</span> from within the expressions inside the group rows / columns.
        <br /><br />
        <strong>Note:</strong>
        To know more about it, please visit <Link href="/features/report-builder/expressions">expressions</Link>.
        While using JQL dataset, you may also make use of parameters in your JQL. Refer parameters section to know more.
    </p>

    <h3>Report UI components</h3>
    <p className="mb-40">
        Report items are the visual elements which is the core UI component of the report. You can drag and drop any report item to the
        display section of the report and customize it later.
        <br /><br />
        Click <Link href="/features/report-builder/ui-elements">here</Link> to know more about individual <Link href="/features/report-builder/ui-elements">UI components</Link> currently supported by report builder.
    </p>

    <h3>Resources</h3>
    <p className="mb-40">
        Report builder allows the user to store some static files like images along with report so that those resources can be used while
        rendering of the report. This could be primarily useful to add banner images, or static data in CSV or JSON formats, etc.
    </p>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
