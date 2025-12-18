/**
 * Filters the input value based on the specified type.
 * 
 * @param {string | undefined} type - The type of filtering to apply ("number", "alphaNum", "email").
 * @param {unknown} value - The input value to be filtered.
 * @returns {string} - The filtered string value.
 */
export const filterInputValue = (type: string | undefined, value: unknown): string => {
    if (typeof value !== "string") {
        return "";
    }

    switch (type) {
        case "number":
            return value.replace(/[^0-9]/g, "").trimStart();
        case "alphaNum":
            return value.replace(/[^a-zA-Z0-9\s]/g, "").trimStart();
        case "float":
            return value.replace(/[^0-9.]/g, "").replace(/^([^.]*\.)|\./g, '$1');
        case "email":
            return value.replace(/[^a-zA-Z0-9@._+-]/g, "").trimStart();
        case "search":
            return value.replace(/[^A-Za-z0-9 ]/g, "").trimStart();
        case undefined:
            return value.replace(/[^a-zA-Z\s]/g, "").trimStart();
        default:
            return value;
    }
};
