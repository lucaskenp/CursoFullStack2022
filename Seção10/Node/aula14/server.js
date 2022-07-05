require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const {middlewareGlobal} = require('./src/middlewares/middleware');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados');
        app.emit('Sucesso');
    })
    .catch(e => console.log(e));
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash =  require('connect-flash');

app.use(express.urlencoded({ extended: true }));   // faz com que o req.body mostre o objeto recebido de um form por exemplo
app.use(express.static(path.resolve(__dirname, 'public'))); // usando pasta de conteúdo statico

app.use(middlewareGlobal);

const sessionOptions = session({
    secret: 'askdjaskdhasjkdjasd123123',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,        // em milésimos de segundo
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('Sucesso', () => {              // quando o evento Sucesso for emitido, o app.on vai executar essa função
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando')
    });
})
