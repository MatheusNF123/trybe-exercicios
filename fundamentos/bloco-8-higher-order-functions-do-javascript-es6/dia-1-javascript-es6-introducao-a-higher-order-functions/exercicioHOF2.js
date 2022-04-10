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



console.log(CheckSorte(2,resultSorteio))