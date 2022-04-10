const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);


  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);
///////////////////////////////////////
// exercicio para praticar

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const pessoa = {
    nome: 'Matheus',
    solbreNome: 'Almeida',
    idade: 26,
}

  const verificaObj = (obj, cidade, NomeCidade) => {
      if(typeof obj !== 'object' || typeof cidade !== 'string' || typeof NomeCidade !== 'string'){
          throw new Error('Dados incorretos, tente novamente')
      }
      
}

      const adicionaCidade = (obj, cidade, NomeCidade) =>{
          try{
            verificaObj(obj, cidade, NomeCidade)
            let novaKey = cidade
            let valorkey = NomeCidade
            obj[novaKey] = valorkey
            return obj
          }catch(error){
              throw error.message
          }
      }
  
  console.log(adicionaCidade(pessoa, 'cidade', 'Nova-Fátima'))