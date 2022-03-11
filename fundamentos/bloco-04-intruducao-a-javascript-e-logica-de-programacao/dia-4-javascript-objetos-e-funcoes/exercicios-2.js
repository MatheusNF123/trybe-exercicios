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


let indice2 = [2,4,6,7,10,0,-3];

function indiceMenorValor(valor){
    let menorValor = valor[0];
    let valorDeIndice = 0;
    for(cont = 0; cont < valor.length; cont += 1){
        if (menorValor > valor[cont]){
            menorValor = valor[cont]
            valorDeIndice = cont;
        }
        
    }    
    return console.log(valorDeIndice);
}
indiceMenorValor(indice2)


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let indiceNome = ['José','Lucas','Nádia','Fernanda','Cairo','Joana'];

function maiorQuantidadeCracteres(nomes){
    let maiorValor = nomes[0].length;
    let valorDeIndice = "";
    for(cont = 0; cont < nomes.length; cont += 1){
        if (maiorValor < nomes[cont].length){
            maiorValor = nomes[cont].length
            valorDeIndice = nomes[cont];
        }
        
    }    
    return console.log(valorDeIndice);
}
maiorQuantidadeCracteres(indiceNome);


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayDeInteiro = [2,3,2,5,8,3,3,4,8,5,5,6,10,10,10,10,10,,2,3];

function inteiroQueMaisRepete(inteiros){
    let a = 0;
    let repetiuN = 0;
    let repetiuV = 0;
    let repetiuQ = 0;
    for(let cont = 0; cont < inteiros.length; cont += 1){
        a += 1;
        for(cont2 = a; cont2 < inteiros.length; cont2 += 1){
            if (inteiros[cont] === inteiros[cont2]){
                repetiuV += 1;                
                repetiuN = inteiros[cont];
                if(repetiuV < repetiuQ){
                    repetiuQ = repetiuV;
                    repetiuN = inteiros[cont];
                }
                
            }       
        }

        
        
    }
    return repetiuN;
}

console.log(inteiroQueMaisRepete(arrayDeInteiro));




// 6 - 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.


function somaTodosOsNumeros(numero){
    let n = 0;
    
    for(let cont = 0; cont <= numero; cont += 1){
        n += cont;
    }
    return n;
}

console.log(somaTodosOsNumeros(5))



// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .



function verificaFimPalavra(nome1, nome2){
    let primeiro = "";
    let segundo = "";
    for(let cont = nome1.length - 2; cont <= nome1.length - 1; cont += 1){
        primeiro += nome1[cont];
    }
    for(let cont2 = nome2.length - 2; cont2 <= nome2.length - 1; cont2 += 1){
        segundo += nome2[cont2];
    }
    if(primeiro === segundo){
        return true;
    }
    return false;
}

console.log(verificaFimPalavra("joaofernando", "fernan"))