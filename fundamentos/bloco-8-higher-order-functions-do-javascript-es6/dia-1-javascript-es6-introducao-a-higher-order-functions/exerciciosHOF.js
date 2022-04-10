// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


const cadastro = (nomeCompleto) => {
    let nomeSplit = nomeCompleto.toLowerCase().split(' ')
    let nomeCadastrado = ''
    for (let i of nomeSplit) {
        if (nomeCadastrado.length === 0) {
            nomeCadastrado = i
        } else {
           nomeCadastrado += `_${i}` 
        }
        
    }
    nomeCadastrado += `@trybe.com`
    return {nome: nomeCompleto, email: nomeCadastrado}
}


 const newEmployees1 = (para1) => {
    const employees = {
      id1: para1('pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: para1('luiza drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: para1('carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  }; 
console.log(newEmployees1(cadastro))


/// metodo gabarito
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));