const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accidentally execute the resolve function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok:true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = copyContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there is an error, reject the promise and send the error to the promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accidentally execute the resolve function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok:true,
                message: 'File Copied!'
            });
        });
    });
}

module.exports = { writeFile, copyFile };