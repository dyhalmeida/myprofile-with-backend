const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

// Configuração para servir arquivos estáticos
server.use(express.static('public'));

// Configuração da template engine
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});


server.get('/', (req, res) => { 
  const about = {
    avatar_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQEcXPVXyi6dSQ/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=gvU2AI42JiMYKdNSSJ8AhwLECAzMjnmFixHsdGqhk9A',
    name: 'Diego Almeida',
    role: 'Javascript Programmer',
    description: 'Work at <a href="http://grupocata.com.br/" target="_blank" title="Work at CATA">CATA</a>',
    links: [
      {
        name: "Github", url: "https://github.com/dyhalmeida"
      },
      {
        name: "Linkedin", url: "https://www.linkedin.com/in/dyhalmeida/"
      }
    ]
  }
  res.render('about', { ...about }); 
});

server.get('/lessons', (req, res) => res.render('lessons', { items: videos }));

server.get('/video', (req, res) => {
  const { id } = req.query;
  const video = videos.find(video => video.id === id);
  if (!video) {
    return res.redirect('/lessons');
  }
  return res.render('video', { ...video });
});

server.listen(5000, () => console.log('server is running'));