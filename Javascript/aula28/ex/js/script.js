let vetor = ['João', 'Lucas', 'Lima', 'Monteiro'];

console.log(vetor);
vetor.push('outro-nome-no-final');
vetor.unshift('outro-nome-no-começo');
console.log(vetor);

vetor.pop();
console.log(vetor);
vetor.shift();
console.log(vetor);
delete vetor[1];
console.log(vetor);
