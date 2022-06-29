const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {            // o middleware permite executar funções em seguida na mesma rota
//     req.section = {nome: 'Luiz', sobrenome:'Lima'}
//     console.log();
//     console.log('Passei no seu middleware');
//     console.log()
//     next();
// }

//Rotas da Home
route.get('/', homeController.paginaInicial);  
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;