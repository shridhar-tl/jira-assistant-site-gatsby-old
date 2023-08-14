import { isAllowedMethod } from '../middleware/api-helpers';
import Ajax from '../_services/AjaxService';
import { setCorsHeader } from '../middleware/cors';
// https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/
// https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/

const clientId = process.env.JIRA_C_CLIENT_ID;
const clientSecret = process.env.JIRA_C_SECRET;

const redirectUrl = 'https://app.jiraassistant.com?oauth=jc';
const cloudIdUrl = 'https://api.atlassian.com/oauth/token/accessible-resources';
const tokenApiUrl = 'https://auth.atlassian.com/oauth/token';
const jiraCloudApiUrl = 'https://api.atlassian.com/ex/jira';

const addlCorsHeader = ', jira-auth-code, jira-refresh-token';

const handler = async function (req, res) {
  if (!isAllowedMethod(req, res, addlCorsHeader, true)) {
    return;
  }

  let response;
  let statusCode = 200;
  try {
    if (!clientId || !clientSecret) {
      throw new Error('Server configuration error. Please try later.')
    }

    const authCode = req.headers['jira-auth-code'];
    const refreshToken = req.headers['jira-refresh-token'];

    const data = {
      "grant_type": "authorization_code",
      "client_id": clientId,
      "client_secret": clientSecret,
      "code": authCode,
      "redirect_uri": redirectUrl
    };

    if (authCode) {
      data.code = authCode;
    } else if (refreshToken) {
      data.grant_type = 'refresh_token';
      data.refresh_token = refreshToken;
    } else {
      statusCode = 400;
      throw Error('Auth code or Refresh token required to generate access code');
    }

    const headers = { 'Content-Type': 'application/json' };

    const $ajax = new Ajax();
    const tokenResponse = await $ajax.post(tokenApiUrl, data, { headers });

    const { access_token: token, refresh_token, expires_in } = tokenResponse;
    const expires_at = new Date().getTime() + ((expires_in - 60) * 1000); // Reduce 1 minute from expiry time

    if (!token) {
      throw Error('Failed to fetch token');
    }

    headers['Authorization'] = `Bearer ${token}`;
    const sites = await $ajax.get(cloudIdUrl, null, { headers });

    if (!sites?.[0]) {
      throw Error('Failed to fetch sites');
    }

    const { url: jiraUrl, id: cloudId } = sites[0];

    const apiUrl = `${jiraCloudApiUrl}/${cloudId}`;
    response = { success: true, token, refresh_token, expires_at, jiraUrl, cloudId, apiUrl };
  } catch (err) {
    if (!statusCode) {
      statusCode = 403;
    }
    response = { success: false, message: err.message };
    console.error(`Jira AuthRequest Failed:- Url:-${req.url}; Err Message:- ${err.message};`);
    if (process.env.VERBOSE_FULL_ERROR === 'true') {
      console.error(err);
    }
  }

  setCorsHeader(res, addlCorsHeader);
  res.status(statusCode).json(response);
}

export function allowJiraCors(req, res, next) {
  setCorsHeader(res, addlCorsHeader);
  next();
}

export default handler;