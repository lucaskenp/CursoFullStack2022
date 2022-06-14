function calculaIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const pesoElement = form.querySelector('.peso');
        const alturaElement = form.querySelector('.altura');

        let peso = Number(pesoElement.value);
        let altura = Number(alturaElement.value);
        let imc = peso / altura**2;

        imc = imc.toFixed(2);

        let message;
        if (imc < 18.5) {
            message = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            message = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            message = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            message = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            message = 'Obesidade grau 2';
        } else if (imc > 40) {
            message = 'Obesidade grau 3';
        }

        resultado.innerHTML = `<p>Seu IMC é ${imc} (${message})</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

calculaIMC();