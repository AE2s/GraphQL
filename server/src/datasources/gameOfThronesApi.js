const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.got.show/api/book',
});
