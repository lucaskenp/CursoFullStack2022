// function calculaIMC() {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');

//     function recebeEventoForm(evento) {
//         evento.preventDefault();
//         const pesoElement = form.querySelector('.peso');
//         const alturaElement = form.querySelector('.altura');

//         let peso = Number(pesoElement.value);
//         let altura = Number(alturaElement.value);
//         if(peso == 0  || altura == 0){

//         }
//         let imc = peso / altura**2;

//         imc = imc.toFixed(2);

//         let message;
//         if (imc < 18.5) {
//             message = 'Abaixo do peso';
//         } else if (imc >= 18.5 && imc <= 24.9) {
//             message = 'Peso normal';
//         } else if (imc >= 25 && imc <= 29.9) {
//             message = 'Sobrepeso';
//         } else if (imc >= 30 && imc <= 34.9) {
//             message = 'Obesidade grau 1';
//         } else if (imc >= 35 && imc <= 39.9) {
//             message = 'Obesidade grau 2';
//         } else if (imc > 40) {
//             message = 'Obesidade grau 3';
//         }
//         console.log(peso, altura, imc);

//         resultado.innerHTML = `<p>Seu IMC é ${imc} (${message})</p>`;
//     }
//     form.addEventListener('submit', recebeEventoForm);
// }

// calculaIMC();

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu imc é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');

    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}