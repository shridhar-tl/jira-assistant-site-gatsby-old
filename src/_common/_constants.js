const AppNameLong = "Jira Assistant";
const AppNameShort = "Jira Assist";

const SiteUrl = "https://www.jiraassistant.com";
const WebAppUrl = "https://app.jiraassistant.com";

const SupportEmailId = "shridhar.tl@gmail.com";

const isBrowser = typeof window !== "undefined";

const Urls = {
    chromeLink: "https://chrome.google.com/webstore/detail/jira-assistant/momjbjbjpbcbnepbgkkiaofkgimihbii?utm_source=jasite",
    firefoxLink: "https://addons.mozilla.org/en-US/firefox/addon/jira-assistant?utm_source=jasite",
    selfDistInstall: "https://github.com/shridhar-tl/jira-assistant/raw/master/release/firefox/JiraAssist_Latest.xpi",
    edgeLink: "https://microsoftedge.microsoft.com/addons/detail/aoenpdbabcjnjbjpegeenodfknllmaoi?utm_source=jasite",
    operaLink: "https://addons.opera.com/en/extensions/details/jira-assistant?utm_source=jasite",
    jiraCloudApp: "https://developer.atlassian.com/console/install/3864d3bc-aad3-4650-ac35-e15af61fd92d?signature=50284775421a3ea30543ccd56a6b1bf125c3784aab7398c35b85d9e9719e4cd1&product=jira",

    sourcecode: "https://github.com/shridhar-tl/jira-assistant/tree/develop",
    extnPrivacyPolicy: "https://github.com/shridhar-tl/jira-assistant/blob/master/docs/PRIVACY_POLICY.md",
    reportsUrl: "https://github.com/shridhar-tl/jira-assistant/blob/master/docs/SHARED_REPORTS.md",
    featuresList: "https://github.com/shridhar-tl/jira-assistant/blob/master/docs/FEATURES.md",
    issueTracker: "https://github.com/shridhar-tl/jira-assistant/issues",
    reportIssue: "https://github.com/shridhar-tl/jira-assistant/issues/new/choose",
    contributeUrl: "https://github.com/shridhar-tl/jira-assistant/blob/master/docs/CONTRIBUTE.md",

    marketPlace: "https://marketplace.atlassian.com/apps/1221570/jassistant?utm_source=jasite",

    featuresPlaylist: "https://www.youtube.com/watch?list=PLxDBQLgpBhsDGppYrDqARYULukk7XFJPV&v=HsWq7cT3Qq0?utm_source=jasite",
    reportBuilderPlaylist: "https://www.youtube.com/watch?v=HMyBkaZ09Xw&list=PLxDBQLgpBhsB_4Q2CGsViLCvfulmVuLAL?utm_source=jasite",

    facebook: "https://www.facebook.com/jiraassist",
    linkedin: "https://www.linkedin.com/company/jira-assistant",

    paypalDonate: "https://paypal.me/shridhartl",
    donorboxUrl: "https://donorbox.org/donate-jira-assistant-extension-",
    contactUs: "https://docs.google.com/forms/d/e/1FAIpQLScJvQtHZI_yZr1xd4Z8TwWgvtFss33hW5nJp4gePCgI2ScNvg/viewform"
};

const SearchApiKey = "AIzaSyC1waRhy7S6Ym20dep-ULBSY7wZjjIgivQ";
const searchEngineId = "004709519611715681850%3Ahbrofaewgdx";

const Apis = {
    // siteSearchFilter & siteSearch
    searchApiUrl: `https://customsearch.googleapis.com/customsearch/v1?key=${SearchApiKey}&cx=${searchEngineId}&q={0}`,
    issueListApi: `https://api.github.com/repos/shridhar-tl/jira-assistant/issues?state=all&per_page=100&page=`,
    issueApi: "https://api.github.com/repos/shridhar-tl/jira-assistant/issues/",
    issueCommentsApi: "https://api.github.com/repos/shridhar-tl/jira-assistant/issues/{0}/comments"
}

//const storeUrl = `${SiteUrl}/features/integration`;
const encStoreUrl = encodeURIComponent(SiteUrl);
const subj = encodeURIComponent('Check out "Jira Assistant" in web store');
const body = encodeURIComponent('Check out "Jira Assistant", a open-source extension / add-on for your browser from below url:'
    + `\n\nChrome users: ${Urls.chromeLink}`
    + `\n\nFirefox users: ${Urls.firefoxLink}`
    + `\n\nEdge users: ${Urls.edgeLink}`
    + `\n\nOpera users: ${Urls.operaLink}`
    + `\n\nTo install as app within Jira Cloud: ${Urls.jiraCloudApp}`
    + `\n\nFor source code or to know more about the tool visit: ${SiteUrl}`
    + `\n\n\nThis would help you to track your worklog and generate reports from Jira easily with lots of customizations.`
    + `Also has lot more features like Worklog timer, Outlook Calendar integration, Jira comment & meeting + worklog notifications, Worklog, Sprint and custom report generations, etc..`);
Urls.gMailShare = `https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&su=${subj}&body=${body}`;
Urls.linkedInShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encStoreUrl}&title=${subj}&summary=${body}&source=`;
Urls.fackbookShare = `https://www.facebook.com/sharer/sharer.php?u=${encStoreUrl}&title=${subj}&description=${body}`;
Urls.twitterShare = `https://twitter.com/intent/tweet?text=${body}`;

const featuresImageList = [
    {
        feature: "integration", title: "Quick and simple setup", path: "/images/sprint-report.png", icon: "bi bi-chat-square-text",
        details: "Install the extension and Integrate with Jira in less than a minute. No credentials required."
    },
    {
        feature: "dashboard", title: "Customizable dashboard", path: "/images/dashboard.png", icon: "bi bi-chat-square-text",
        details: "Create dashboard and customize it by adding and rearrange gadgets, change layout, etc..",
        subFeatures: [
            { title: "Dashboard Grid Layout", path: "/images/dashboard.png", details: "Gadgets in dashboard can be reaaranged and viewable in Grid Layout" },
            { title: "Dashboard Tabbed Layout", path: "/images/dashboard-tabbed.png", details: "Gadgets in dashboard can be viewed in tab layout" },
        ]
    },
    {
        feature: "reports", title: "Generate various reports", path: "/images/worklog.png", icon: "bi bi-chat-square-text",
        details: "Generate multiple reports like Worklog report, Sprint reports, etc., or build your own reports.",
        subFeatures: [
            { title: "Timesheet report", path: "/images/worklog.png", details: "Worklog report lets the user to view user / ticket wise worklog for a range of days" },
            { title: "Worklog summary view", path: "/images/worklog.png", details: "Summary tab in worklog report provides user wise worklogs on individual project and issue type for a selected date range" },
            { title: "Worklog custom groupable grid", path: "/images/worklog.png", details: "Flat groupable tab provides worklog details in flat data format which is groupable by user by drag and drop of columns" },
            { title: "Sprint report", path: "/images/sprint-report.png", details: "Sprint report provides user with worklogs and story details for selected sprint" },
            { title: "Advanced Report Builder", path: "/images/report-builder.png", details: "Report builder enables the users with minimal technical knowledge, can build any report" },
            { title: "Simple Custom report", path: "/images/custom-report.png", details: "Generate simple custom reports by choosing the list of columns and customize how it is displayed." }
        ]
    },
    {
        feature: "calendar", title: "Worklog calendar view", path: "/images/calendar.png", icon: "bi bi-chat-square-text",
        details: "View and add/edit worklogs in calendar view on monthly, weekly or single day view modes"
    },
    {
        feature: "bulk-import", title: "Bulk import", path: "/images/bulk-import-worklog.png", icon: "bi bi-chat-square-text",
        details: "Bulk import issues or worklogs within seconds by uploading CSV files.",
        subFeatures: [
            { title: "Bulk import issues", path: "/images/bulk-import-issues.png", details: "Bulk import issues by uploading CSV file." },
            { title: "Bulk import worklogs", path: "/images/bulk-import-worklog.png", details: "Bulk import worklogs by uploading CSV file." },
        ]
    },
    {
        feature: "settings", title: "Great configurable option", path: "/images/settings.png", icon: "bi bi-chat-square-text",
        details: "Configuration options starting from a simple skin to advance settings fitting your needs"
    }
];

const featureList = [
    { feature: "integration", title: "Integration", path: "/integration" },
    { feature: "dashboard", title: "Dashboard", path: "/dashboard" },
    { feature: "reports", title: "Reports", path: "/reports" },
    { feature: "report-builder", title: "Report Builder", path: "/report-builder" },
    { feature: "calendar", title: "Calendar / Worklogs", path: "/calendar" },
    { feature: "bulk-import", title: "Bulk Import", path: "/bulk-import" },
    { feature: "settings", title: "Settings", path: "/settings" }
]

export { AppNameLong, AppNameShort, SiteUrl, isBrowser, SupportEmailId, Urls, featuresImageList, featureList, Apis, WebAppUrl };