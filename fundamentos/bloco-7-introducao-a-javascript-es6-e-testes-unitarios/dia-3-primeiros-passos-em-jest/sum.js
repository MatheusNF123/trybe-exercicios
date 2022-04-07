function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const myRemove = (arr, item) => {
  let copiaArray = []
  for (let i of arr) {
    if (i !== item) {
      copiaArray.push(i)
    }
  }
  return copiaArray
}
const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false

  if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz'

  if (num % 3 === 0) return 'fizz'

  if (num % 5 === 0) return 'buzz'

  return num

}


const encode = (stringEncode) => {
  let recebe = '';
  
  for (let cont in stringEncode) {     
      
    if (stringEncode[cont] === 'a' ) {
      recebe += '1'
    }
    else if (stringEncode[cont] === 'e') {
      recebe += '2'
    }
    else if (stringEncode[cont]=== 'i') {
      recebe += '3'
    }
    else if (stringEncode[cont] === 'o') {
      recebe += '4'
    }
    else if (stringEncode[cont] === 'u') {
      recebe += '5'
    }
    else {
      recebe += stringEncode[cont]
    }
  }
  return recebe;
}
console.log(encode('arroz'))


 const decode = (stringDecode) => {
  let recebe = '';
  for (let cont = 0; cont < stringDecode.length; cont += 1) {
    if (stringDecode[cont].includes('1')) {
      recebe += 'a'
    }
    else if (stringDecode[cont].includes ('2')) {
      recebe += 'e'
    }
    else if (stringDecode[cont].includes('3')) {
      recebe += 'i'
    }
    else if (stringDecode[cont].includes ('4')) {
      recebe += 'o'
    }
    else if (stringDecode[cont].includes('5')) {
      recebe += 'u'
    }
    else {
      recebe += stringDecode[cont]
    }
  }
  return recebe;
} 



let tecName = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let nomeT = ["Matheus"];

function techList(tec, nome) {
  let vazio = [];
  tec.sort();
  for (let cont = 0; cont < tec.length; cont += 1) {
    vazio.push({ tech: tec[cont], name: nome, })
  }
  if (vazio.length === 0) {
    return "Vazio!"
  }
  return vazio;
}
techList(tecName, nomeT);



function hydrate(string) {
  // referencia do comando usado pra pegar o numero dentro da string.
  //https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript/
  let soma = 0;
  let numeros = string.match(/\d+/g).map(Number);
  for (let cont = 0; cont < numeros.length; cont += 1) {
    soma += numeros[cont];
  }
  if (soma > 1) return soma + ' copos de água'  
  else return soma + ' copo de água' 

}
console.log(hydrate("1 cerveja"));











module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};