const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));   // faz com que o req.body mostre o objeto recebido de um form por exemplo
app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando')
});