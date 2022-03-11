// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(nome){
    let nomeInteiro = ""
    let ehPalindromo = false

    for(let cont = nome.length - 1; cont >= 0; cont -= 1 ){
        nomeInteiro += nome[cont] ;        
    }
    if(nomeInteiro === nome){
        return ehPalindromo = true;
    }
    return ehPalindromo = false;
    
}console.log(verificaPalindromo("arara"));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


let indice = [2,3,6,7,10,1];

function indiceMaiorValor(valor){
    let maiorValor = valor[0];
    let valorDeIndice = 0;
    for(cont = 0; cont < valor.length; cont += 1){
        if (maiorValor < valor[cont]){
            maiorValor = valor[cont]
            valorDeIndice = cont;
        }
        
    }    
    return console.log(valorDeIndice);
}
indiceMaiorValor(indice)


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
