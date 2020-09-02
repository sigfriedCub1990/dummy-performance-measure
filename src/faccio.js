const generateFakeObject = (propsCount = 100) => {
    const usualSuspect = {};
    const arr = new Uint32Array(1);

    for (let i = 0; i < propsCount; i++) {
        const pseudoRandomNumber = window.crypto.getRandomValues(arr)
        usualSuspect[i] = pseudoRandomNumber;
    }

    return usualSuspect;
}

module.exports = {
    generateFakeObject,
}
