const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um título de testes.',
    descricao: 'Uma descrição de testes'
}).then(dados => console.log(dados)).
    catch(err => console.log(err));


exports.paginaInicial = (req, res) => {
    res.render('index');      // renderiza o arquivo index na pasta de views
}

exports.trataPost = (req, res) => {
    res.send(`
        Nova rota de POST    
    `);
}