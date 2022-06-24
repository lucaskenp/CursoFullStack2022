import geraSenha from "./geradores";
const senhaGerada = document.querySelector('.senha-gerada');
const caracteres = document.querySelector('#caracteres');
const numeros = document.querySelector('#numeros');
const maiusculas = document.querySelector('#maiusculas');
const minusculas = document.querySelector('#minusculas');
const simbolos = document.querySelector('#simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default ()=>{
    gerarSenha.addEventListener('click',()=>{
        
        senhaGerada .innerHTML = gera();

    });
};


function gera(){
    const senha = geraSenha(
        caracteres.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    );
    return senha ||'Nada Selecionado';
}