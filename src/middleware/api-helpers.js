import { setCorsHeader } from "./cors";

export function isAllowedMethod(req, res, addlCorsHeader, allowGet) {
    if (req.method === 'OPTIONS') {
        setCorsHeader(res, addlCorsHeader);
        res.status(200).send({ message: 'Ok' });
        return false;
    }

    if (req.method !== (allowGet ? 'GET' : 'POST')) {
        res.status(404).send({ message: 'Not Found' });
        return false;
    }

    return true;
}