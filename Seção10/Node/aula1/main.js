const cachorro = require('./modulo1');

const dog = new cachorro('Lucas');

console.log(dog.nome);

const path = require('path');
console.log(__filename); // caminho com nome do arquivo
console.log(__dirname); // caminho da pasta do arquivo

console.log(path.resolve(__dirname));
