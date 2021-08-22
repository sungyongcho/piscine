const express = require('express');

const app = express();
const http = require('http');
const https = require('https');
const cors = require('cors');
const querystring = require('querystring');

const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

app.use(cors());

app.use('/', (req, res) => {
  const options = {
    host: 'api.notion.com',
    port: 443,
    path: '/v1/databases',
    method: 'GET',
    headers: {
      Authorization:
        'Bearer secret_uzsit5xY56mYnpj2fMzKqN9A63a7yBuzkjFs0qVkRN7',
      'Notion-Version': '2021-08-16',
    },
  };

  const httpssreq = https.request(options, (response) => {
    let data = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk.toString();
      // console.log(data);
    });
    response.on('end', () => {
      const body = JSON.parse(data);
      res.send(body);
    });
  });
  httpssreq.end();
});

app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({ username: 'bryan' }));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
