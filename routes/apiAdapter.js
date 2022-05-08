const axios = require('axios');
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    const api = axios.create({
        baseURL: baseUrl,
        timeout: TIMEOUT,
    });

    return api;
};
