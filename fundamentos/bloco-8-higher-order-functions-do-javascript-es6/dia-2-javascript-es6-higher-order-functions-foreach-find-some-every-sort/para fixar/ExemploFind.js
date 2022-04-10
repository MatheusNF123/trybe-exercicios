// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30


// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

// const numbers = [19, 21, 30, 3, 45, 22, 15];

//  const findDivisibleBy3And5 = (numero) => {
//   // Adiciona seu código aqui
//   if(numero %3 === 0 && numero %5 === 0){
//       return numero
//   }

// }
// /* const divisível = numbers.find(findDivisibleBy3And5) */


// /* const numero = numbers.find((numeros) => numeros %3 === 0 && numeros %5 === 0) */
// /* console.log(numero) */
//  console.log(numbers.find(findDivisibleBy3And5)) 



// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:const names = ['João', 'Irene', 'Fernando', 'Maria'];
// const names = ['João', 'Irene', 'Fernando', 'Maria'];
// const findNameWithFiveLetters = (letra) => {
//     // Adicione seu código aqui:
// if(letra.length === 5){
//     return letra
// }

// }
// /*  const nome = names.find((nomes) => {
//     if(nomes.length === 5){
//         return nomes
//     }

//  }) */


//   console.log(names.find(findNameWithFiveLetters)); 



//   3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
    // Adicione seu código aqui    
    let title = musicas.find((music) => music.id === id).title
    return title  
}
console.log(findMusic('31031685')) 

/* const musica = musicas.find((id) => { if(id.id === '31031685') return id.title})
console.log(musica.title) */
 



