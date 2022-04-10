// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultSorteio = (numeroApostado,numeroSorteado) => {    
    return numeroApostado === numeroSorteado
}

const CheckSorte = (numeroApostado, callback) =>{
    let numAleatorio = (Math.round(Math.random() * 5))
    if(callback(numeroApostado,numAleatorio)){
        console.log('ganhou')
    }else{
        console.log('perdeu')
    }
}



// console.log(CheckSorte(2,resultSorteio))




// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResposta = (Gabarito, respostaPessoaEstudante) =>{    
    let pontos = 0
    for(let cont = 0; cont < Gabarito.length; cont +=1){        
       if (Gabarito[cont] === respostaPessoaEstudante[cont] ){                     
        pontos += 1
        }
        else if(Gabarito[cont] !== respostaPessoaEstudante[cont] && respostaPessoaEstudante[cont] === 'N.A'){
            pontos = pontos
        }
        else{
            pontos -= 0.5
        }
    }
    return pontos
}

const notasEscola = (Gabarito, respostaPessoaEstudante, checkResposta) =>{
    return checkResposta(Gabarito, respostaPessoaEstudante)
}

console.log(notasEscola(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResposta))