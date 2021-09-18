const express = require('express');
const path = require('path');

const rp = require('request-promise');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/cryptocurrency', async (req, res) => {
  const start = req.query.start || 1;
  const limit = req.query.limit || 10;

  const requestOptions = {
    method: 'GET',
    uri: 'http://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    headers: { 'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c' },

    // uri: 'http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    // headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY },
    qs: { start: 1 + (start - 1) * limit, limit: start * limit, convert: 'USD' },
    json: true,
    gzip: true
  };

  const response = await rp(requestOptions).catch(err => err.error.status);
  res.json(response);
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')));

const port = process.env.PORT || 5000;
app.listen(port);
