//  1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: */
 /* let numero = 10;
let fatorial = 1;

for(let index = numero; index >= 1; index--){
    fatorial *= index;
    console.log('fatorial dentro do for ', + fatorial);
}
console.log('resultado final ', + fatorial)  */






/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */
/* 
let word = 'tryber';
let invert = "";

for( let cont = word.length - 1; cont >= 0; cont-- ){
    invert = word[cont];
    
}
console.log(invert);
 */

// 3 - Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css']; 

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
/* let mairoPalavra = array[0];
let menorPalavra = array[0];
for(let cont = 0; cont < array.length; cont += 1){    
    if(array[cont].length > mairoPalavra.length){
        mairoPalavra = array[cont];
    }
}

for(let cont = 0; cont < array.length; cont += 1){    
    if(array[cont].length < menorPalavra.length){
        menorPalavra = array[cont];
    }
}

console.log('maior palavra', mairoPalavra );
console.log('menor palavra', menorPalavra ); */











// 4 -  Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo = 0;

for(let cont = 0; cont <= 50; cont += 1){
    let ehNumeroPrimo = true;

    for(let index = 2; index < cont; index += 1){
        if(cont % index === 0){
            ehNumeroPrimo = false;
            
        }
    }
    if(ehNumeroPrimo){
        maiorNumeroPrimo = cont;
    }

}
console.log(maiorNumeroPrimo);


