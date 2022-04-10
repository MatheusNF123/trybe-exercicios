//Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// - 1Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

/* const fatorial = (a) => {
    let nFatorial = 0
    for(let cont = 0; cont < a; cont +=1){
        nFatorial += a * cont
    }
    return nFatorial
}
console.log(fatorial(4)) */

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
const fatorial = (a) => a > 1 ? a * fatorial(a-1) : a
console.log(fatorial(4))

