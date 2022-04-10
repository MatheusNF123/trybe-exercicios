
//   const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   throw: A palavra reservada throw serve para lançar uma exceção criada por você. No caso, definimos que não seria aceito um parâmetro que não fosse do tipo number , então criamos esse "erro customizado". Caso contrário, a função sum apresentaria um comportamento incorreto. Se quiser saber mais detalhes, consulte a documentação .

// new : O operador new serve para criar um objeto personalizado ou nativo do JavaScript . Mais sobre o new aqui .


// Error: A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new , você cria uma cópia deste objeto, que será lançada como uma exceção no seu código. Veja mais sobre Error na documentação oficial .


// try/catch: Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));