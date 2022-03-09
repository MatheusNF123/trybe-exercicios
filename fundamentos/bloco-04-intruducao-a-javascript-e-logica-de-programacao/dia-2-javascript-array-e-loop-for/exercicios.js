// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/*  for(let numero of numbers){
    console.log(numero)
} */
///////////////////////////////////////////////////////////////////////





//2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*   let soma = 0;
for(let cont = 0; cont < numbers.length ; cont += 1){
     soma += numbers[cont];
     
}
console.log(soma);  */ 

///////////////////////////////////////////////////////////////////////////////////



// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

/*  let soma = 0;
for(let cont = 0; cont < numbers.length ; cont += 1){
    soma += numbers[cont];

}
console.log(soma);
console.log(soma / numbers.length);
  */
///////////////////////////////////////////////////////////////////////////////////




// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*   let soma = 0;
 
for(let cont = 0; cont < numbers.length ; cont += 1){
    soma += numbers[cont];

}

console.log(soma);
let mediaAritimetica = soma / numbers.length;
console.log(mediaAritimetica);
if(mediaAritimetica > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}  */

///////////////////////////////////////////////////////////////////////////////////



// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*  let maiorValor = 0;
for(let numero of numbers){
    if(numero > maiorValor){
        maiorValor = numero;
        
    }
    
}
console.log(maiorValor);  */

///////////////////////////////////////////////////////////////////////////////////




// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/* let totImpar = 0;
for(let numero of numbers){
    if(numero % 2 !== 0){
        totImpar += 1; 
        
    }
}
    if( totImpar === 0){
       console.log('nenhum valor ímpar encontrado'); 
    }
    else {
        console.log(totImpar);
    }
    

 
*/

///////////////////////////////////////////////////////////////////////////////////



// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/*  let menorNumero = numbers[0];
for(let cont = 0; cont < numbers.length ; cont += 1){
    if(numbers[cont] < menorNumero){
     menorNumero = numbers[cont];
    }
}
console.log(menorNumero); 
 */

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
/* let numeroArray = [];
for (let cont = 1; cont <= 25; cont += 1){
    numeroArray.push(cont);
}
console.log(numeroArray); */



///////////////////////////////////////////////////////////////////////////////////



// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
/* let numeroArray = [];
for (let cont = 1; cont <= 25; cont += 1){
    numeroArray.push(cont);
}
for(let index = 0; index < numeroArray.length; index += 1){
    let valorDivisao = numeroArray[index] / 2;
    console.log(valorDivisao);
} */

///////////////////////////////////////////////////////////////////////////////////


