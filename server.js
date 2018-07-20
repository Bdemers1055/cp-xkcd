const express = require('express');
const axios = require('axios');

const server = express();

const port = process.env.PORT || 7042;

server.get('/', (request, response) => {
    response.send('wfelsl!');
});

server.get('/comic/:number', (request, response) => {
    // console.log(request.params);
    const { number } = request.params;
    const url = `https://xkcd.com/${number}/info.0.json`;
    axios.get(url)
    .then((comicResponse) => {
        response.json(comicResponse.data);
    })
    .catch(() => {
        response.status(500).json({
            msg: 'Something wrong',
        });
    });
});

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});