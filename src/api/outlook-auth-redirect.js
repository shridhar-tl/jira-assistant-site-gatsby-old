import { isAllowedMethod } from '../middleware/api-helpers';

const handler = async function (req, res) {
    if (!isAllowedMethod(req, res, undefined, true)) {
        return;
    }

    const { state, code } = req.query;
    res.redirect(`https://app.jiraassistant.com/?oauth=ol&code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`);
}

export default handler;