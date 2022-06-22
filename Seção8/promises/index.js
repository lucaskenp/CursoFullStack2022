// // Promises sempre esperam por algo e resolvem a utilização de antigas funções de callback 

// function rand(min, max){
//     min*=1000;
//     max*=1000;
//     return Math.floor(Math.random()*(max - min)+ min);
// }
// function esperaAi(msg, tempo,cb){
//     setTimeout(()=>{
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1,3), function(){
//     esperaAi('Frase 2', rand(1,3), function(){
//         esperaAi('Frase 3', rand(1,3));
//     });
// });


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);
    })