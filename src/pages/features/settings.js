import React from 'react';
import { AppNameLong } from '../../_common/_constants';
import FeaturesLayout from '../../layout/FeaturesLayout';

const html = (<div>
    <img className="img-fluid mb-60 rounded-top" src="/images/settings.png" alt="Settings and configurations" />
    <h2 className="mb-10">Settings</h2>

    <p className="mb-40">
        {AppNameLong} allows you to control the behaviour of the extension by providing as many controllable configurations in settings module. As of now there are three major categorization of settings. They are User groups, Advanced settings and General settings. More detailed information is available below:
    </p>

    <h3>User groups</h3>
    <p className="mb-40">
        All the reports you pull from Jira would be in some way related to the users who is using Jira. Hence everywhere you would need to provide user list as input to reports. Moreover most of the users would be generating various reports for same set of users. Hence it makes sense to pull out the user list configuration as a separate page and reuse same list across reports. Hence you can configure the user list once and everywhere you can make use of the same list.
    </p>
    <p className="mb-40">
        From any of the reports, if you make changes to the user list, it doesn&apos;t get saved permanently, hence, at times when you just wanted to pull reports for few set of uses, you can just remove other users and generate report. As the changes will not be saved, when you come back next time, still all the users will be available in the list for generating report. This is an alternate approach rather than providing checkbox for selection of users while generating report.
    </p>

    <hr />

    <h3>General settings</h3>
    <p className="mb-40">
        General settings page contains multiple configuration options categorized under 5 different tabs. Following are some of the details about the configurations available. But we suggest you to have a look at the settings page for a complete list as each configuration contains the help text explaining you what the configuration is used for.
    </p>

    <h4>General Tab</h4>
    <ul className="mb-40">
        <li><strong>Display Date and Time format:</strong> Select your preferred date and time format to be displayed throughout the application.</li>
        <li><strong>Displayed hours:</strong> Select the hour range between 00:00 to 23:00 (24 hours format). This is useful to hide the remaining hours in calendar view.</li>
        <li><strong>Working hours:</strong> Select your working hours range between 00:00 to 23:00 (24 hours format). This is mainly useful in focusing on the calendar as working hours will be highlighted in calendar.</li>
        <li><strong>Working days:</strong> Select the days in week you would be working. This is defaulted from Monday to Friday</li>
        <li><strong>Start of week:</strong> Select the starting day of your week. If nothing is selected then default will be taken.</li>
    </ul>

    <hr />

    <h3>Advanced settings</h3>
    <p className="mb-40">
        Advanced settings contains configurations which would help you to control the technical nature of the extension. This page uses grid structure where rows represents the various configuration options available and columns represent the individual instances. Also, for some configurations, this page allows you to edit the default settings which would impact all the instances. Following are the list of configuration options available.
    </p>
    <ul>
        <li><strong>Integrated on:</strong>This is for information purpose only. This field displays the date when individual instances of integrations are done. This field may not show appropriate date for very old installations where date is not captures in older versions.</li>
        <li><strong>Jira Server Url:</strong> This is the base path URL of the Jira server to access the API&apos;s. This should just contain the base path and should not point to any specific api or page.</li>
        <li><strong>Jira User id:</strong> This is the user id in Jira. This is mostly used for display purpose in report, but some functionality may break if this is not matching with the user id in Jira. If user id is updated in Jira, it may not automatically reflect in the extension at all the times. Hence, sometimes it becomes necessary that you update it manually.</li>
        <li><strong>Email id:</strong> This servers the same purpose as that of &quot;Jira User id&quot; configuration.</li>
        <li><strong>Open tickets JQL:</strong> Currently &quot;My Open Tickets&quot; gadget uses this JQL to pull list of tickets from Jira. If you are not satisfied with the default JQL or if some of the statuses in Jira is renamed, then this query may cause issue while fetching the data. At those times you can manually modify the query from here.</li>
        <li><strong>Ticket suggestions JQL:</strong> All the Jira ticket suggestions field you see in this extension like in Add Worklog, Settings, etc,. will make use of this query to fetch the list of suggestions. Once the list is pulled for the first time, it may be cached for performance reasons.</li>
        <li><strong>Disable Jira issue updates:</strong> From v1.2 onwards you have an option to view the notifications for any changes happened in Jira for the tickets you are involved in. You can enable or disable that feature using this configuration.</li>
        <li><strong>Jira updates JQL (used to fetch updates from Jira):</strong> This configuration is used to fetch the issues modified after you had last viewed it.</li>
        <li><strong>Enable tracking user actions (Anonymous, Google Analytics):</strong> As a developer, we would like to know what features are used much by the users and so provide more customizations in that specific feature. So, analytics helps us to track what features are used much by the users without capturing any personal information about you. You can read our privacy policy to know what exact details are we capturing. But this configuration lets you decide whether you send us the anonymous usage reports or not.</li>
        <li><strong>Enable tracking exceptions (Anonymous):</strong> Similar to the usage report, we would also like to know if there are any issues / errors while using this application. This would help us to track and fix the issues much faster and thus providing you better experience. You can refer to our privacy policy to know more about it.</li>
        <li><strong>Disable notifications from developer:</strong> As a developer, we would like to keep you posted about any issues or upcoming features in {AppNameLong}. So that you can be prepared with necessary actions. Though we provide you an option to disable the feature using this configuration, we strongly suggest you not to disable it.</li>
    </ul>

    <p className="mb-40">
        <strong>Note:</strong>
    </p>
    <ul>
        <li>For most of the cases, any changes you make to the configuration would reflect only the next time you revisit the extension or refreshing the extension by pressing &quot;F5&quot; key.</li>
        <li>Be cautious when modifying the settings available in Advance Settings page. Any misconfiguration may cause failures in various parts of the extension and leave it unstable / unusable.</li>
    </ul>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
