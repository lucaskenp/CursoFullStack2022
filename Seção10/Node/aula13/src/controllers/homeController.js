exports.paginaInicial = (req, res) => {
    //req.session.usuario = {nome: 'Lucas', logado: true};
    // console.log(req.session.usuario);
    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'Sucess');
    // req.flash('success', 'Testando');
    // console.log(req.flash('error'),req.flash('success'), req.flash('info'));
    res.render('index');      // renderiza o arquivo index na pasta de views
}

exports.trataPost = (req, res) => {
    res.send(`
        Nova rota de POST    
    `);
}