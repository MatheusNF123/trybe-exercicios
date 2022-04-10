// 4 - Crie um código JavaScript com a seguinte especificação:

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

// Exemplo:
//    String determinada: "Tryber x aqui!"
  
//      Parâmetro: "Bebeto"

//      Retorno: "Tryber Bebeto aqui!"

// * Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const novaString = (string, palavra) => {
    let nwString = ''
 for(let cont in string){
    string[cont] === 'x' ? nwString += palavra : nwString += string[cont]
}   
 return funcaoConcat(nwString)
}

// - Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:

// * JavaScript
// * HTML; ... #goTrybe".

/* const array = ['html', 'css', 'js', 'git', 'bootstrap']

 const funcaoConcat = (arroz) => {
    let arraysort = array.sort()
    
    return `${arroz}! Minhas cinco principais habilidades são:
    *${arraysort[0]}
    *${arraysort[1]}
    *${arraysort[2]}
    *${arraysort[3]}
    *${arraysort[4]}`
} 

console.log(novaString('trybe x Aqui', 'Matheus')) */



//// resolução do gabarito

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));