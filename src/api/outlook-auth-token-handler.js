import { isAllowedMethod } from '../middleware/api-helpers';
import Ajax from '../_services/AjaxService';
import { setCorsHeader } from '../middleware/cors';
// https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow

const tenentId = process.env.OUTLOOK_TENENT_ID;
const clientId = process.env.OUTLOOK_CLIENT_ID;
const clientSecret = process.env.OUTLOOK_SECRET;

const redirectUrl = 'https://www.jiraassistant.com/oauth/outlook';
const basePath = 'https://login.microsoftonline.com';
const tokenApiUrl = `${basePath}/${tenentId}/oauth2/v2.0/token`;

const addlCorsHeader = ', outlook-auth-code, outlook-refresh-token';

const scope = 'Calendars.Read profile offline_access openid';

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

        const authCode = req.headers['outlook-auth-code'];
        const refreshToken = req.headers['outlook-refresh-token'];

        const data = {
            grant_type: "authorization_code",
            client_id: clientId,
            client_secret: clientSecret,
            scope,
            redirect_uri: redirectUrl
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

        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

        const $ajax = new Ajax();
        const tokenResponse = await $ajax.post(tokenApiUrl, data, { headers });

        const { access_token: token, id_token, refresh_token, expires_in } = tokenResponse; //token_type,
        const expires_at = new Date().getTime() + ((expires_in - 60) * 1000); // Reduce 1 minute from expiry time

        response = { success: true, token, refresh_token, expires_at, id_token };
    } catch (err) {
        if (!statusCode) {
            statusCode = 403;
        }
        response = { success: false, message: err.message };
        console.error(`MSO AuthRequest Failed:- Url:-${req.url}; Err Message:- ${err.message};`);
        if (process.env.VERBOSE_FULL_ERROR === 'true') {
            console.error(err);
        }
    }

    setCorsHeader(res, addlCorsHeader);
    res.status(statusCode).json(response);
}

export function allowOutlookCors(req, res, next) {
    setCorsHeader(res, addlCorsHeader);
    next();
}

export default handler;