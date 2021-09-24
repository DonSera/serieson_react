export function getHeaderKeys(obj) {
    return Object.keys(obj);
}

export function getDetail(obj, key) {
    if (typeof obj[key] === "string" || Array.isArray(obj[key])) {
        return obj[key]
    } else {
        return Object.keys(obj[key])
    }
}