// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const soma = (...som) => som.reduce(((acc, elemento) => acc + elemento),0)

console.log(soma(5,8,20,70));