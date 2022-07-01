require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('Sucesso');
    })
    .catch(e => console.log(e));


app.use(express.urlencoded({ extended: true }));   // faz com que o req.body mostre o objeto recebido de um form por exemplo
app.use(express.static(path.resolve(__dirname, 'public'))); // usando pasta de conteúdo statico

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('Sucesso', () => {              // quando o evento Sucesso for emitido, o app.on vai executar essa função
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando')
    });
})
