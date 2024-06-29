function callback_BasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
        callback(null, result);
        } else {
        callback(new Error('Result is not odd!'), null);
        }
    }, 1000);
}

function promisifiedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callback_BasedFunction(arg1, arg2, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    }).then(
        resolve => console.log(`good: result = ${resolve}`),
        reject => console.log(`bad: ${reject}`)
    )
}

promisifiedFunction(1,3);