exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7]
    });      // renderiza o arquivo index na pasta de views
}

exports.trataPost = (req, res) => {
    res.send(`
        Nova rota de POST    
    `);
}