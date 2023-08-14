export default function cors(req, res, next) {
    setCorsHeader(res);
    next();
};

export function setCorsHeader(res, addlHeaders) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    /*res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, OPTIONS"
    );*/
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept" + (addlHeaders || '')
    );
}