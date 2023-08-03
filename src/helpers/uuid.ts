export function generateUUID() {
    return 'xxxx-yxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 8) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(8);
    });
}