const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


/// Para Fixar

// 1 -Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email, index) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
    console.log(index);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach(showEmailList)


  const cervejas = [
      {nome: 'Apa', score: 50},
      {nome: 'Ipa', score: 20},
      {nome: 'witbier', score: 70},
      {nome: 'helles bock', score: 90},
      {nome: 'biere de garde', score: 90},
      {nome: 'large', score: 90},
      {nome: 'pilsen', score: 10},
  ]

  cervejas.forEach((elemento,index) => {
    if(elemento.score >= 90){
        console.log(elemento.nome)
    }
    
  })