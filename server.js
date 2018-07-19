const express = require('express');
const axios = require('axios');

const server = express();

const port = 7042;

server.get('/', (request, response) => {
    response.send('wfelsl!');
});

server.get('/comic', (request, response) => {
    const url = 'https://xkcd.com/614/info.0.json';
    axios.get(url)
    .then((comicResponse) => {
        response.json(comicResponse.data);
    })
    .catch((err) => {
        response.json({
            msg: 'Something wrong',
            // error: err,
        });
    });
});

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});