const express = require('express');
const path = require('path');

const rp = require('request-promise');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

const requestOptionsBase = {
  method: 'GET',
  uri: 'http://sandbox-api.coinmarketcap.com/v1/', //uri: 'http://pro-api.coinmarketcap.com/v1/',
  headers: { 'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c' }, //headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY },
  json: true,
  gzip: true
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/cryptocurrency', async (req, res) => {
  const start = req.query.start || 1;
  const limit = req.query.limit || 10;

  const uri = requestOptionsBase.uri + 'cryptocurrency/listings/latest';
  const qs = { start: 1 + (start - 1) * limit, limit: start * limit, convert: 'USD' };

  const response = await rp({ ...requestOptionsBase, uri, qs }).catch(err => err.error.status);

  res.json(response);
});

app.get('/api/coin', async (req, res) => {
  const response = await rp({
    ...requestOptionsBase,
    uri: requestOptionsBase.uri + 'cryptocurrency/map?symbol=BTC,ETH,ADA,BNB,USDT,XRP,AVAX,DOT,DOGE,USDC'
  }).catch(err => err.error.status);

  res.json(response);
});

app.get('/api/convert', async (req, res) => {
  const origin = req.query.origin;
  const destination = req.query.destination;
  const amount = req.query.amount;

  const uri = requestOptionsBase.uri + 'tools/price-conversion';
  const qs = { amount, symbol: origin, convert: destination };

  const response = await rp({ ...requestOptionsBase, uri, qs }).catch(err => err.error.status);

  res.json(response);
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')));

const port = process.env.PORT || 5000;
app.listen(port);
