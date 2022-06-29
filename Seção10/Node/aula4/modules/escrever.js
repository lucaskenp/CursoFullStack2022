const fs = require('fs').promises;


module.exports = (caminhoArquivo, dados) => {
    fs.writeFile(caminhoArquivo, dados, { flag: 'w'}); // criar o arquivo //o 'w' vai apagar tudo e escrever novamente
                                                                          //o 'a' vai dar um append no final do arquivo

};

