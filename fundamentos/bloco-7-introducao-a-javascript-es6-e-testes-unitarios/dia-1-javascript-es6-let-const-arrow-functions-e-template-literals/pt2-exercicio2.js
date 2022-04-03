/// 2 Crie uma função que receba uma frase e retorne qual a maior palavra.
// com for normal
/* const maiorPalavra = (frase) =>{
    let fraseSplit = frase.split(' ')
    let maiorP = fraseSplit[0]
    let n = 0
    let result = []
    for (let cont = 0; cont < fraseSplit.length; cont +=1){        
            if(fraseSplit[cont].length > maiorP.length ){
                maiorP = fraseSplit[cont]
                n = fraseSplit[cont].length
            }
        
    }
    result.push(maiorP)
    result.push(n)
    return result
}
let palavra = 'Antônio foi no banheiro e não sabemos o que aconteceu'
console.log(`A maior palavra é: "${maiorPalavra(palavra)[0]}" com ${maiorPalavra(palavra)[1]} letras`) */

// com for of
const maiorPalavra = (frase) =>{
    let fraseSplit = frase.split(' ')
    let maiorP = 0    
    let result = ''
    for (let cont of fraseSplit){        
           if (cont.length > maiorP) {
               maiorP = cont.length
               result = cont
           }
        
    }
     /* result.push(maiorP)
    result.push(n) */
    return result 
}
let palavra = 'Antônio foi no banheiro e não sabemos o que aconteceu'
console.log(`A maior palavra é: "${maiorPalavra(palavra)}"`)

/* let palavra = 'Antônio foi no banheiro e não sabemos o que aconteceu'
console.log(`A maior palavra é: "${maiorPalavra(palavra)[0]}" com ${maiorPalavra(palavra)[1]} letras`)  */

// com for in

const recebeFrase = (frase) => {
    let fraseArray = frase.split(' ')
    let maior = ''
    for (let i in fraseArray){       
     if(fraseArray[i].length > maior.length){
         maior = fraseArray[i]
     }
   
}
return maior
}
console.log(recebeFrase('Antônio foi no banheiro e não sabemos o que aconteceu'))



// em uma linha
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
