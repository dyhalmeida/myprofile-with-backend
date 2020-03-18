const express = require('express');
const server = express();

server.get('/', (req, res) => res.send('Server is running'));

server.listen(5000, () => console.log('server is running'));