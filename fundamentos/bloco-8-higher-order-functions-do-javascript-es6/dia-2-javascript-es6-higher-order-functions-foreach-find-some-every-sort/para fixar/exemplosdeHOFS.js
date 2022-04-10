// As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:


// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// Significasse Verifique se cada elemento do meu array é múltiplo de 2 .

// meuArray.forEach((elemento) => {
//     if (elemento % 2 === 0) {
//       console.log(`${elemento} é divísivel por 2!`);
//     }
//   });

//   Uma função como meuArray.find(elemento => elemento % 5 === 0) , por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco .



//   const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
//   arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//     console.log('Cada elemento do array:', element);
//     console.log('Index, posição do elemento:', indexOfTheArray);
//     console.log('Array percorrido:', theEntireArray);
//   });
  
  // => ---------------
  //   Cada elemento do array: josé
  //   Index, posição do elemento: 0
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: 50
  //   Index, posição do elemento: 1
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: 0.25
  //   Index, posição do elemento: 2
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  //   ---------------
  //   Cada elemento do array: { comida: 'Chocolate' }
  //   Index, posição do elemento: 3
  //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]


