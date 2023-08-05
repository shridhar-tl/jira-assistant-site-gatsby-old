import { formatString } from "../_common/utils";

class AjaxService {
    constructor() {
        this._basePath = ""; // ToDo: When required need to add server url
        if (!this._basePath.endsWith('/')) {
            this._basePath += '/';
        }
    }

    async get(url, params, options) {
        const { headers } = options || {};
        const config = {
            responseType: 'json',
            headers
        };

        return await (await fetch(this.prepareUrl(url, params), config)).json();
    }

    async post(url, body, { headers }) {
        const contentType = headers?.['Content-Type'] || headers?.['content-type'];
        if (contentType === 'application/x-www-form-urlencoded') {
            const keys = Object.keys(body);
            const data = [];
            keys.forEach(k => { data.push(k + '=' + encodeURIComponent(body[k])) });
            body = data.join('&');
        }

        return await (await fetch(url, {
            responseType: 'json',
            headers,
            body,
            method: 'POST'
        })).json();
    }

    prepareUrl(url, params) {
        let urlStr = url.toString();
        const isArray = params && Array.isArray(params);
        if (isArray && params.length > 0) {
            urlStr = formatString.apply(urlStr, params);
        }
        else if (params && !isArray && typeof params === "object") {
            urlStr = prepareUrlWithQueryString(urlStr, params);
        }

        if (urlStr.startsWith('~/')) {
            return this._basePath + urlStr.substring(2);
        }

        return urlStr;
    }
}

export function prepareUrlWithQueryString(url, params) {
    params = encodeAsQuerystring(params);
    return `${(url || "").clearEnd("?")}${params ? "?" : ""}${params}`;
}

export function encodeAsQuerystring(params) {
    return Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join('&');
}

export default AjaxService;