const axios = require('axios');

const client = axios.create({
    baseURL: "https://api.got.show/api"
});

module.exports = client;
