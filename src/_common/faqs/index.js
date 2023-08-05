import bulk from './bulk-import.json';
import calendar from './calendar.json';
import dashboard from './dashboard.json';
import general from './general.json';
import integration from './integration.json';
import reportBuilder from './report-builder.json';
import reports from './reports.json';
import security from './security.json';
import settings from './settings.json';
import support from './support.json';
import web from './web.json';

const faqs = [...general, ...bulk, ...calendar, ...dashboard, ...integration, ...reportBuilder, ...reports, ...security, ...settings, ...support, ...web];

export default faqs;