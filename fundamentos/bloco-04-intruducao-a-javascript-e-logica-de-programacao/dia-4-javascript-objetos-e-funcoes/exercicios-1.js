let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("bem vindo " + info.personagem);

  info.recorrente = "Sim";

  console.log(info.recorrente + " achando o que tem em recorrente");


  for (key in info){
    console.log(key + "Mostrando todas as chaves");
  }


  for (key in info){
    console.log(info[key] + "mostrando todos os valores da chave");
  }

  info.personagem = 'Margarida e Tio Patinhas';
  info.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas";
  
console.log(info)


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);



leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco',})
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos ")