const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Configuração para servir arquivos estáticos
server.use(express.static('public'));

// Configuração da template engine
server.set('view engine', 'html');
nunjucks.configure('views', {
  express: server
});


server.get('/', (req, res) => res.render('about'));
server.get('/lessons', (req, res) => res.render('lessons'));

server.listen(5000, () => console.log('server is running'));