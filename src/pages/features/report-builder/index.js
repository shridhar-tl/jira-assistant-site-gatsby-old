import React from 'react';
import Seo from '../../../layout/seo';
import { AppNameLong } from '../../../_common/_constants';
import Link from '../../../components/Link';
import FeaturesLayout from '../../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Reports overview" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/HMyBkaZ09Xw?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>

    <h2>Report Builder</h2>
    <p className="mb-40">
        "Report Builder" empowers users with technical proficiency to craft their own reports, spanning from simple to advanced.
        This module supports a range of functionalities, including input validation, JQL execution, data processing,
        and data representation, enabling tailored report creation.
        <br /><br />
        Some of the prominent features supported by Report Builder include:
        <br /><br />
    </p>
    <ul>
        <li><strong>Parameters:</strong> Users can include parameters of various data types such as date, date range, text, numbers, etc.
            These parameters allow users to input values while generating the report.</li>
        <li><strong>JQL Execution:</strong> Users can execute one or more JQL queries in Jira, utilizing the retrieved data to generate comprehensive reports.</li>
        <li><strong>UI Components:</strong> Drag-and-drop various UI components like Tables, Images, and Charts onto the report,
            configuring them to display the processed data.</li>
        <li><strong>Table Functionality:</strong> The Table UI component supports the creation of column and row groupings based on records.</li>
        <li><strong>Custom Menus:</strong> Similar to {AppNameLong}'s gadgets, users can add custom menus to grids within the report.</li>
    </ul>
    <h3>Parameters</h3>
    <p className="mb-40">
        Parameters play a pivotal role in user interaction, enabling input for the report. Parameters support multiple input forms,
        including text boxes, numeric inputs, dropdowns, autocompletes, date selections, boolean checkboxes, user groups, and even file selections.
        <br /><br />
        Parameters can be set as mandatory or optional, with the option for default values that are automatically populated.
        When a parameter is added to a report, it can be utilized within expressions across the report. To incorporate parameters in expressions,
        employ the syntax <span className="expr-sample">Parameters.paramName.value</span>, where "paramName" corresponds to the parameter's name.
        <br /><br />
        For JQL datasets, parameters often need to be incorporated into the JQL. The following syntax is employed for this purpose:
        <span className="expr-sample">@Parameters.paramName.value$</span>. As parameter values are accessible only during report generation,
        not during design, you can assign a default value that functions at both design and generation stages using
        <span className="expr-sample">@Parameters.paramName.value|someDefaultValue$</span>.
    </p>

    <h3>Expressions</h3>
    <p className="mb-40">
        Expressions play a pivotal role in customizing data appearance, conversion, and formatting within reports. Learn more about
        <Link href="/features/report-builder/expressions"> expressions</Link>.
    </p>
    <h3>Global Fields</h3>
    <p className="mb-40">
        Global fields encompass constant values that can be integrated into expressions across various components.
        These fields are divided into two categories: Report Fields and Report State:
        <br /><br />
        <strong>Report Fields</strong> are inherent fields provided by Jira Assistant, mainly containing user configurations
        like date formats, which can be utilized for data formatting or validation.
        <br /><br />
        <strong>Report States</strong> are user-defined fields added either as constant values or expressions derived at runtime.
        Users have the freedom to store various types of data in these fields. Report states can be integrated into expressions
        using the syntax <span className="expr-sample">ReportState.propName</span>.
    </p>
    <h3>Datasets</h3>
    <p className="mb-40">
        Datasets consist of collections of data stored as JavaScript objects. This data source can be employed by tables to
        organize data in a tabular format, including groups, and can also be used by expressions to extract specific values.
        Datasets can be sourced from various origins such as HTTP requests, files, expressions, JQL, etc.
        <br /><br />
        A dataset might include row groups, column groups, variables, and data. Once a dataset is assigned to a specific group
        within the table, you can access the data within rows/columns under that group. You can use <span className="expr-sample">RowGroup</span>
        to access row groups and similarly use <span className="expr-sample">ColGroup</span> and <span className="expr-sample">Variables</span>
        within expressions in group rows/columns.
        <br /><br />
        <strong>Note:</strong> For more information, please refer to the <Link href="/features/report-builder/expressions">expressions section</Link>.
        When using JQL datasets, parameters can also be integrated into your JQL queries. Refer to the parameters section for further details.
    </p>

    <h3>Report UI components</h3>
    <p className="mb-40">
        Report items are the visual elements which is the core UI component of the report. You can drag and drop any report item to the
        display section of the report and customize it later.
        <br /><br />
        Click <Link href="/features/report-builder/ui-elements">here</Link> to know more about individual
        <Link href="/features/report-builder/ui-elements"> UI components</Link> currently supported by report builder.
    </p>

    <h3>Resources</h3>
    <p className="mb-40">
        Report builder allows the user to store some static files like images along with report so that those resources can be used while
        rendering of the report. This could be primarily useful to add banner images, or static data in CSV or JSON formats, etc.
    </p>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;

export const Head = () => (<Seo title="Report Builder" />);
