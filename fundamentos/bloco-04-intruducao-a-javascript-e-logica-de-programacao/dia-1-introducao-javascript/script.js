/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: */

/* const a = 10;
const b = 20;

console.log (a+b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
console.log (a%b)
 */

/* 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

/* const a = 20;
const b = 50;

if(a > b){
    console.log("'a' é maior que 'b' ")
}else{
    console.log("'b' é maior que 'a' ")
} */


/* 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */
/* 
const a = 22;
const b = 50;
const c = 30;

if (a > b && a > c){
    console.log(a)
}
else if (a < b && b > c){
    console.log(b)
}
else{
    console.log(c) 
}*/


/* 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
/* const a = 0;

if(a > 0){
    console.log("positivo")
}
else if (a < 0){
    console.log("negativo")
}
else{
    console.log("zero")
} */


/* 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 */
/* let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaTudo = anguloA + anguloB + anguloC;
let todosPositivos =  anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosPositivos){
    if (soma === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  } */

  /* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */
  let xadrez = "peao";
  
 /*  switch(xadrez.toLocaleLowerCase()){
      case "peao":
        console.log('Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.');
        break;

      case "cavalo":
          console.log("Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.")
        break;
      case "bispo":
          console.log("Sem restrição de número de casas, mas somente no sentido diagonal.")
        break;
      case "torre":
          console.log("pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita,")
        break;
      case "rainha":
          console.log("Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.")
        break;
      case "rei":
          console.log("Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.")
        break;
        default:
            console.log("não e uma peça de xadrez")
  } */

/*   7 -Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */


/* let nota = 50;
if(nota < 0 || nota > 100){
    console.log("erro")

}
else if(nota >= 90){
    console.log("nota A")
}
else if(nota >= 80){
    console.log("nota B")
}
else if(nota >= 70){
    console.log("nota C")
}
else if(nota >= 60){
    console.log("nota D")
}
else if(nota >= 50){
    console.log("nota E")
}
else if(nota < 50){
    console.log("nota F")
}
 */


/* 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if */

/* const a = 20;
const b = 25;
const c = 22;

let ehPar = false;

if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    ehPar = true

}
  console.log(ehPar) */


/* 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const a = 32;
const b = 50;
const c = 18;

let ehImpar = false;

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    ehImpar = true;
}
    console.log(ehImpar);
