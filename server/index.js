const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());

// Proxy middleware
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://api.football-data.org/v4/',
  changeOrigin: true, // required for virtual hosted sites
  pathRewrite: {
    '^/api': '', // remove /api from request path
  },
});

// Proxy all requests with /api prefix to target API
app.use('/api', apiProxy);

// Start server
app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});