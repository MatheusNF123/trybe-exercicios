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
  /* let xadrez = "peao"; */
  
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

/* const a = 32;
const b = 50;
const c = 18;

let ehImpar = false;

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    ehImpar = true;
}
    console.log(ehImpar); */




/* 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos */

/* * Atente que, sobre o custo do produto, incide um imposto de 20%

* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. */

/* const valorDeCusto = 1;
const valorDeVenda = 3;

if(valorDeCusto >= 0 && valorDeVenda >=0){
  let valorCustoTotal = valorDeCusto * 1.2;
  let valorDeLucro = (valorDeVenda - valorCustoTotal) * 1000;
  console.log(valorDeLucro);

}
else{
  console.log("error")
} */

/* 11 - Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela. */

/* * A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências: */
  /* NSS (Instituto Nacional do Seguro Social)
  Salário bruto até R$ 1.556,94: alíquota de 8%
  Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */

  /* IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */



/* let inss;
let ir;

let salarioBruto = 2000.00;

if(salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
}
else if(salarioBruto <= 5198.82){
  inss = salarioBruto * 0.11;
}
else if(salarioBruto > 5189.82){
  inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if(salarioBase <= 1903.98){
  ir = 0;
}
else if (salarioBase <= 2826.64){
  ir = (salarioBase * 0.075) - 142.80;
}
else if( salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 635.13;
}
else{
  ir = (salarioBase * 0.275) - 869.36;
}

console.log("salario: " + (salarioBase - ir)); */