let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

/* for(let cont = 1; cont < numbers.length; cont += 1){
    for(let cont2 = 0; cont2 < numbers.length; cont2 += 1){
        if(numbers[cont] < numbers[cont2]){
            let inverte = numbers[cont];
            numbers[cont] = numbers[cont2];
            numbers[cont2] = inverte;
        }
    }
}

console.log(numbers) */

/* for(let cont = 1; cont < numbers.length; cont += 1){
    for(let cont2 = 0; cont2 < numbers.length; cont2 += 1){
        if(numbers[cont] > numbers[cont2]){
            let inverte = numbers[cont];
            numbers[cont] = numbers[cont2];
            numbers[cont2] = inverte;
        }
    }
}

console.log(numbers); */
let novoArray = [];
for(let cont = 0; cont < numbers.length; cont += 1){
    if (numbers[cont + 1]){
    novoArray.push(numbers[cont] * numbers[cont + 1]);
    }
    else{
        novoArray.push(numbers[cont] * 2);
    }
    
}
console.log(novoArray);



