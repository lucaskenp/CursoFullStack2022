const pessoa = {
    nome: 'João',
    sobrenome: 'Lucas',
    idade: 25,

    fala(){
        console.log(`${this.nome}`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};
pessoa.fala();
pessoa.incrementaIdade();
console.log(pessoa.idade);
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);

// function criaPessoa(nome, sobrenome ,idade){
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('João', 'Lucas', 25);
// const pessoa2 = criaPessoa('Lima', 'Lucas', 26);
// const pessoa3 = criaPessoa('Maria', 'Lucas', 27);
// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);