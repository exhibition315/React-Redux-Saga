export const fetch = (text) => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            const token = `${text} data`;
            resolve(token);
        }, 1000);
    });
    return p;
};
