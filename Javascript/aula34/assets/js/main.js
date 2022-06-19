// function exibeData() {
//     const data = new Date();
//     const section = document.querySelector('.container');
//     const diaSemana = data.getDay();
//     const dia = data.getDate();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const minute = data.getMinutes();
//     let stringSemana;

//     switch (diaSemana) {
//         case 0:
//             stringSemana = "domingo";
//             break;
//         case 1:
//             stringSemana = "segunda-feira";
//             break;
//         case 2:
//             stringSemana = "terça-feira";
//             break;
//         case 3:
//             stringSemana = "quarta-feira";
//             break;
//         case 4:
//             stringSemana = "quinta-feira";
//             break;
//         case 5:
//             stringSemana = "sexta-feira";
//             break;
//         case 6:
//             stringSemana = "sábado";
//             break;
//     }
//     switch (mes) {
//         case 0:
//             stringMes = "janeiro";
//             break;
//         case 1:
//             stringMes = "fevereiro";
//             break;
//         case 2:
//             stringMes = "março";
//             break;
//         case 3:
//             stringMes = "abril";
//             break;
//         case 4:
//             stringMes = "maio";
//             break;
//         case 5:
//             stringMes = "junho";
//             break;
//         case 6:
//             stringMes = "julho";
//             break;
//         case 7:
//             stringMes = "agosto";
//             break;
//         case 8:
//             stringMes = "setembro";
//             break;
//         case 9:
//             stringMes = "outubro";
//             break;
//         case 10:
//             stringMes = "novembro";
//             break;
//         case 11:
//             stringMes = "dezembro";
//             break;
//     }

//     section.innerHTML = `<h1> ${stringSemana}, ${dia} de ${stringMes} de ${ano} ${hora}:${minute}</h1>`;

// }

// exibeData();

const h1 = document.querySelector('.container h1');
const data = new Date();
let options = {     
    dateStyle: 'full',

}

h1.innerHTML = data.toLocaleDateString('pt-BR', options);