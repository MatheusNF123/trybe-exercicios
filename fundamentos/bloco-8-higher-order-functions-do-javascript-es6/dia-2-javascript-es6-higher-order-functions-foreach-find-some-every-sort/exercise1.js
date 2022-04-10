const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  // - 1 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  function authorBornIn1947() {
   const nomeAutora =  books.find((nome) => nome.author.birthYear === 1947).author.name
  
    return nomeAutora
  
    
}

  console.log(authorBornIn1947()) 


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
    let nameBook = books[0].name
    // escreva aqui o seu código
    books.forEach((nome) => {      
      
        if(nome.name.length < nameBook.length)  nameBook = nome.name;      
    })
    return nameBook
    
    // Variável nameBook que receberá o valor do menor nome;
    
}
 console.log(smallerName())
 



// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

function getNamedBook() {
  // escreva seu código aqui
 let nomeLivro = books.find((elemento) => elemento.name.length === 26 )
 return nomeLivro
}
// console.log(getNamedBook())



// 4 - Ordene os livros por data de lançamento em ordem decrescente.


// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  const livroEmOrdemDeLancamento = books.sort((a,b)=> b.releaseYear - a.releaseYear)
  return livroEmOrdemDeLancamento
}
// console.log(booksOrderedByReleaseYearDesc())

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const nasceramNoSéculoXX = books.every((elemento) => elemento.author.birthYear > 1900 && elemento.author.birthYear < 2001)
  return nasceramNoSéculoXX
}
// console.log(everyoneWasBornOnSecXX())


// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const livroDecadaDe80 = books.some((elemento) => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989)
  return livroDecadaDe80
}
// console.log(someBookWasReleaseOnThe80s())



// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

// const expectedResult = false;


 const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
} 
console.log(authorUnique())