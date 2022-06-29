const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));   // faz com que o req.body mostre o objeto recebido de um form por exemplo

app.get('/', (req, res) =>{
    res.send(`
        <form method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res)=>{    // o ? faz o parametro ser opcional
    console.log(req.query);                     // então a url /testes/ continua funcionando normal
    res.send(req.query.nome);                   // digitar ? na url da Web faz um parametro query
})                                              // exemplo de query: /testes/?nome=Luiz&sobrenome=Miranda&idade=30

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando')
});