import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <iframe title="Bulk import" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className="youtube-frame" type="text/html"
        src="https://www.youtube.com/embed/6hAOtUm1lUk?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=1&cc_load_policy=1"></iframe>
    <h2 className="mb-10">Bulk import</h2>
    <p className="mb-40">
        {AppNameLong} helps to bulk import your data to Jira within minutes. As of today, bulk import option is available only for Issues and Worklogs.
    </p>
    <ul className="mb-40">
        <li>You can navigate to bulk import module for issues or worklog and upload the CSV file with all the required columns to upload.</li>
        <li>You can download a sample template with list of columns which you can fill and upload.</li>
        <li>Worklog import module only supports columns which are available in sample template, where as with issues you can add or remove columns as you wish.</li>
        <li>While importing issues, remember that you will have to provide value for all the mandatory fields without which the upload operation may fail.</li>
        <li>Click on <span className="fa fa-upload" /> icon which will open a file dialog. You can select the CSV file to be uploaded.</li>
        <li>Once a file is chosen all the records in the file will be validated and result will be shown on screen.</li>
        <li>All the records passing the validation will be highlighted with green and records with error will be shown with amber.</li>
        <li>Each record will have a status column which contains the details about validation like error message in case of validation failure. You can rectify those errors and try to upload it once again.</li>
        <li>You will be allowed to select individual records to be uploaded. If you do not want a particular record to be uploaded, then just unselect it.</li>
        <li>Any records having validation issue would be unselected by default and you will not be allowed to select it.</li>
        <li>Finally click on Import button which will upload all the selected records and status of each records will get updated.</li>
        <li>For newly created records, issue key will be filled automatically and you can optionally export the data for further reference.</li>
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
