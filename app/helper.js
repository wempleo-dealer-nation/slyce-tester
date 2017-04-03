import { basename } from 'path';
console.log(basename());

var encodeQueryData = function(data) {
    return data.map(function(key, value) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
}

var slyceConfig = function() {
    return JSON.parse(`${__base}/slyce.config.js`);
}

module.exports = {
    encodeQueryData: encodeQueryData,
    slyceConfig: slyceConfig
}