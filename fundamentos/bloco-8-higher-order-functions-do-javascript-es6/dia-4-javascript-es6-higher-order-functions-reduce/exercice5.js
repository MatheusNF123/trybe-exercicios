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

//   5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(obj) {
    // escreva seu código aqui
    const uper = obj.reduce((acc,elemento) => {
      return acc + elemento.split('').reduce((acc2, elemento1)=> {
        if(elemento1 === 'a' || elemento1=== 'A') return acc2 + 1
        return acc2
       },0)
    },0)
    return uper
  }
  console.log(containsA(names));


//   const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
//   ];
  
//   function containsA() {
//     return names.reduce((acc, curr) =>
//        acc + curr.split('').reduce((acumulator, current) => {
//           if (current === 'a' || current === 'A') return acumulator + 1;
//           return acumulator;
//        }, 0), 0);
//   }
//   console.log(containsA(names));