const fs = require('fs');
const path = require('path');

const stat = file => {
    return new Promise ((resolve, reject) => {
        fs.stat( path.join(__dirname, `./${file}`), (err, callback) => {
            if (err) reject(err);
            resolve(callback);
        })
    })
}

const exists = file => {
    return new Promise ((resolve, reject) => {
        fs.stat( path.join(__dirname, `./${file}`), (err, callback) => {
            if (err) resolve(false);
            resolve(true);
        })
    })
}

const unlink = file => {
    return new Promise ((resolve, reject) => {
        fs.unlink( path.join(__dirname, `./${file}`), (err, callback) => {
            // if (err) reject(err);
            resolve(callback);
        })
    })
}

const read = file => {
    return new Promise ((resolve, reject) => {
        fs.readFile( path.join(__dirname, `./${file}`), 'utf-8', (err, callback) => {
            if (err) reject (err);
            resolve(callback);
        })
    })
}

const append = (file, data) => {
    return new Promise ((resolve, reject) => {
        fs.appendFile( path.join(__dirname, `./${file}`), data, (err, callback) => {
            if (err) reject (err);
            resolve(callback);
        })
    })
}

module.exports = {
    stat,
    unlink,
    read,
    append,
    exists
}