exports.paginaInicial = (req, res) => {
    res.render('index');      // renderiza o arquivo index na pasta de views
}

exports.trataPost = (req, res) => {
    res.send(`
        Nova rota de POST    
    `);
}