const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Configuração da template engine
server.set('view engine', 'html');
nunjucks.configure('views', {
  express: server
});


server.get('/', (req, res) => res.render('index'));

server.listen(5000, () => console.log('server is running'));