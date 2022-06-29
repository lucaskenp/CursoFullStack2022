exports.paginaInicial = (req, res) => {
    res.render('index');      // renderiza o arquivo index na pasta de views
    return;
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}