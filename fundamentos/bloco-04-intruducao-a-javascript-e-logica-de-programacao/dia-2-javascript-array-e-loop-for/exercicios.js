// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/* for(let numero of numbers){
    console.log(numero)
}
 */
//2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/* let soma = 0;
for(let cont = 0; cont < numbers.length ; cont += 1){
     soma += numbers[cont];
     
}
console.log(soma); */


// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

/* let soma = 0;
for(let cont = 0; cont < numbers.length ; cont += 1){
    soma += numbers[cont];

}
console.log(soma);
console.log(soma / numbers.length);
 */


// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*  let soma = 0;
 
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
} */

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for(let numero of numbers){
    if(numero > maiorValor){
        maiorValor = numero;
        
    }
    
}
console.log(maiorValor);