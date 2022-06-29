exports.paginaInicial = (req, res) => {
    res.send(`
        <form method="POST">
            Contato: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send(`
        Nova rota de POST contato    
    `);
}