// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// // Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumeros = numbers.reduce(getSum);
// console.log(sumNumbers); // 113


// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15



// // com iteraçãp
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113




// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85




// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

// ----- filter / reduce -------

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const recebeArray = numbers.filter(elemento => elemento % 2 === 0).reduce((acc, elemento) => acc + elemento)

// console.log(recebeArray) 152



// ----- / reduce -------
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const numerosrecebido = numbers.reduce((acc, numeros) => numeros % 2 === 0 ? numeros + acc : acc)
// // console.log(numerosrecebido) 152





// result gabarito  ----- filter / reduce -------
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152



// result gabarito  ----- filter  -------
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152







const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];



const variavel = estudantes.map((elemento) => ({name: elemento.nome, materia: elemento.materias.reduce((acc, m) => acc.nota > m.nota ? acc : m ).name}))

   
console.log(variavel)

// resposta
// const getBestClass = (acc, materia) => {
//     if (acc.nota > materia.nota) return acc;
//     return materia;
//   };
  
//   const reportBetter = (students) => students.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBestClass).name}));
  
//   console.log(reportBetter(estudantes));