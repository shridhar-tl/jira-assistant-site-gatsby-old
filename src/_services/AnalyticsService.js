export default class AnalyticsService {
    setUserId(uid) {
        if (uid) {
            window.JAInstId = uid;
            window.ga?.('set', 'userId', uid);
        }
    }

    trackEvent(event, category, label, value) {
        window.ga?.('send', 'event', category, event, label || this.getCurrentRouteUrl(), value);
    }

    trackError(err, fatal) {
        window.ga?.('send', 'exception', {
            'exDescription': this.getExceptionDetails(err),
            'exFatal': fatal || false
        });
    }

    getExceptionDetails(err) {
        if (err) {
            if (typeof err === "object") {
                if (err.promise && err.reason) {
                    const { status, response } = err.reason;
                    err = { status, response };
                }

                try {
                    return JSON.stringify(err);
                }
                catch (e) {
                    return this.searilizeObj(err);
                }
            }
            else {
                return this.searilizeObj(err);
            }
        }
        else {
            return `Error occurred:- ${typeof err}`;
        }
    }

    searilizeObj(obj, depth) {
        depth = depth || 0;

        try {
            const result = Object.keys(obj).reduce((res, key) => {
                let val = obj[key];
                if (typeof val === "object") {
                    if (key.startsWith("_") || depth > 0) {
                        return res;
                    }
                    val = this.searilizeObj(val, depth + 1);
                }

                res[key] = val;
                return res;
            }, {});

            if (!depth) {
                return JSON.stringify(result);
            }
            else {
                return result;
            }
        }
        catch (e) { return "Unknown error: Unable to searilize"; }
    }

    getCurrentRouteUrl() {
        let page = document.location.pathname;

        return page;
    }

    trackPageView(page) {
        if (!page) {
            page = this.getCurrentRouteUrl();
        }
        page = page?.toLowerCase();

        if (this.lastPageView === page) { return; }

        this.lastPageView = page;

        window.ga?.('set', 'page', page);
        window.ga?.('send', 'pageview', page);
    }
}

export class MockAnalyticsService {
    setUserId() { }
    trackEvent() { }
    trackError() { }
    trackPageView() { }
}

export const EventCategory = {
    UserInput: "User Input",
    ButtonClicked: "Button Clicked",
    IconClicked: "Icon Clicked",
    UserSearch: "User Search",
    UserShare: "User Shared",
    UserActions: "User Actions"
};