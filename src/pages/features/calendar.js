import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <img className="img-fluid mb-60 rounded-top" src="/images/calendar.png" alt="Calendar & worklogs" />
    <h2 className="mb-10">Calendar Features</h2>
    <p className="mb-40">
        The integrated calendar available in {AppNameLong} provides the most easiest and comfortable way to log your work just by dragging with mouse cursor on time grid. It also allows you to copy, or move the worklog easily thought the entries in calendar.
    </p>

    <h3>View</h3>
    <ul className="mb-40">
        <li><strong>View mode:</strong> You can view the calendar in 3 different modes based on period range: Month mode, Week mode and Day mode.</li>
        <li><strong>Navigation:</strong> You can use the navigation keys to navigate to different period.</li>
        <li><strong>Upload worklog:</strong> Any worklog you create newly through this extension will not automatically update to Jira by default. It would stay within your extension until you verify and upload it. This lets you to review the summary in various gadgets for accuracy before uploading. However, this default behaviour can be changed from settings page.</li>
        <li><strong>Per day summary:</strong> Daily summary for total hours logged will be shown in calendar highlighted with different colors to report about any shortage or over logging. This is based on the threshold you set in settings page.</li>
        <li><strong>Color codes:</strong> You can change the color codes used in the calendar from the configuration popup by clicking the <span className="fa fa-cogs" /> icon from top right corner of the calendar.</li>
    </ul>

    <h3>Edit Worklog</h3>
    <p className="mb-40">
        You can Add, Edit, Delete, Copy or Move worklogs for different date and time from within calendar module.
    </p>
    <ul className="mb-40">
        <li><strong>Quick log:</strong> If {AppNameLong} is integrated with calendar, then calendar module shows the list of meetings on daily basis. This meeting entries will contain a <span className="fa fa-clock" /> icon. By clicking this icon, you can easily generate a worklog for that particular meeting timings. You can also set one or more ticket numbers in &quot;Default meeting tickets&quot; field under settings page to automatically create worklog under that ticket.</li>
        <li><strong>Delete worklog:</strong> Both already uploaded worklog and pending worklogs can be deleted from within calendar page.</li>
        <li><strong>Edit worklog:</strong> Both already uploaded worklog and pending worklogs can be edited from within calendar page just by clicking the appropriate entry. If the worklog is already uploaded to Jira, then any changes you make would get updated in Jira directly.</li>
        <li><strong>Copy worklog:</strong> You can easily copy worklogs by right click the worklog entry and click on copy menu. Then in the popup, you can change the date / time and any other details you need to change and click on Save button which will create a copy in the given date.</li>
        <li><strong>Copy worklog with drag and drop:</strong> Easiest way to copy worklog is to press Alt key and then drag and drop the worklog where you would like to copy. This would create a copy in the target date / time. Then if required you can click the copied worklog and edit it.</li>
        <li><strong>Move worklog:</strong> To change the date or time of the worklog, you can just drag and drop it to the target date / time. If the worklog is already uploaded to Jira, then the changes you make will also get updated in Jira immediately.</li>
        <li><strong>Upload to Jira:</strong> To upload any pending worklog, you can right click on any worklog and click on &quot;Upload worklog&quot; menu. If you want to upload all the pending worklog for the current view period, then just click on the <span className="fa fa-upload" /> icon from top right corner of the calendar.</li>
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
