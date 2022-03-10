// 1 -Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
/*  let numero = 5;

for(cont = 0; cont < numero; cont += 1){
    let numero2 = "";
    for(cont2 = 0; cont2 < numero; cont2 += 1){
        numero2 += "*" 
        
    } 
    console.log(numero2);
}  */








// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
/*
let numero = 5;
let numero2 = "";
for(cont = 0; cont < numero; cont += 1){
    numero2 += "*"
    console.log(numero2);
}
*/








// 3 - Agora inverta o lado do triângulo. Por exemplo:


/* let numero = 5;
let vazio = " ";
let input = numero;
let numero2 = "";
for(cont = 1; cont <= numero; cont += 1){
    numero2 = "";
    for(cont2 = 1; cont2 <= numero; cont2 += 1){
       if(cont2 < input){
           numero2 += vazio;
       }
       else{
           numero2 += "*";
        }
        
    } 
    console.log(numero2);
    input -= 1;
}   */






//  4 - Depois, faça uma pirâmide com n asteriscos de base


/* let n = 5;
let asteriscos = "*";
let espaçoLinha = "";

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for(let cont = 0; cont <= meio; cont += 1) {
    for(let cont2 = 0; cont2 <= n; cont2 += 1) {
        if(cont2 > esquerda && cont2 < direita) {
            espaçoLinha = espaçoLinha + asteriscos;
        }
        else{
            espaçoLinha = espaçoLinha + " ";
        }
    }

console.log(espaçoLinha);
espaçoLinha= "";
direita += 1;
esquerda -= 1;


} */

 // 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:







// 6 - Faça um programa que diz se um número definido numa variável é primo ou não.

// * Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

// * Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numero = 4;
let divisor = 1;

for(let cont = 2; cont <= numero; cont++){
    if(numero % cont === 0){
    divisor += 1; 
    }
      
}

if(divisor === 2){ 
console.log(numero + ' é primo');
}
else{ console.log(numero + ' não e primo');
}