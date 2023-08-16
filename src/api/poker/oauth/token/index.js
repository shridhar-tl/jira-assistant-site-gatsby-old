import crypto from 'crypto';
import admin from 'firebase-admin';
import { setCorsHeader } from '../../../../middleware/cors';
import { isAllowedMethod } from '../../../../middleware/api-helpers';

const pokerSecret = process.env.POKER_TOKEN_SECRET;
const verboseError = process.env.VERBOSE_FULL_ERROR === 'true';
let configured = false;

if (pokerSecret) {
    try {
        const cert = JSON.parse(atob(pokerSecret));
        const credential = admin.credential.cert(cert);
        admin.initializeApp({ credential });
        configured = true;
    } catch (err) {
        console.error('Failed to load poker secret', err);
    }
} else {
    console.error('Error: Failed to load poker configuration');
}

const handler = async function (req, res) {
    if (!isAllowedMethod(req, res)) {
        return;
    }

    let response;
    let statusCode = 200;
    try {
        if (!configured) {
            throw new Error('Missing configuration. Error Code:- MIS_CERT');
        }

        let roomId = req.params.roomId;
        let role = 'mem';
        if (!roomId) {
            roomId = crypto.randomBytes(6).toString("hex");
            role = 'mod';
        }

        const sid = crypto.randomBytes(5).toString("hex");
        const userId = req.body.email || sid;
        console.log('about to generate token:-', userId, sid, roomId, role);
        const token = await admin.auth().createCustomToken(userId, { sid, roomId, role });

        response = { success: true, token, sid, roomId };
    } catch (err) {
        if (!statusCode) {
            statusCode = 403;
        }
        response = { success: false, message: err.message };
        console.error(`Poker AuthRequest Failed:- Url:-${req.url}; Err Message:- ${err.message};`);
        if (verboseError) {
            console.error(err);
        }
    }

    setCorsHeader(res);
    res.status(statusCode).json(response);
}

export function allowPokerCors(req, res, next) {
    setCorsHeader(res);
    next();
}

export default handler;