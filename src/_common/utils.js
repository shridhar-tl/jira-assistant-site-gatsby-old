export function getCurrentYear() {
    return new Date().getFullYear();
}

export function getDisplayDate(value) {
    return convertToDate(value).format("dd-MMM-yyyy");
}

export function convertToDate(value) {
    return new Date(value);
}

export function formatString(...args) {
    if (args && args.length === 1 && Array.isArray(args[0])) {
        args = args[0];
    }

    if (args && !Array.isArray(args)) { args = [args]; }
    let str = this;
    for (let i = 0; i < args.length; i++) {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), args[i]);
    }
    return str;
};