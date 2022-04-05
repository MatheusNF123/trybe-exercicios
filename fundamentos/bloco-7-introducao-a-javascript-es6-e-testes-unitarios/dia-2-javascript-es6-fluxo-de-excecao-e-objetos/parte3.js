const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/* - 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
 */
 const novoPeriodo = 'turno' 
const horario = 'noite'
  const turnNoite = (obj, chave, valor) =>{
       let turno = chave
       obj.turno = valor
       
  }

 console.log(turnNoite(lesson2,novoPeriodo,horario)) 


/* 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
 */

  const listarKyes = (obj1) => Object.keys(obj1)
  
  console.log(listarKyes(lesson1)) 


/* 3 - Crie uma função para mostrar o tamanho de um objeto.
 */

   const tamanhoObj = (obj3) => {
  let tamanho = Object.keys(obj3)
  return tamanho.length
  }
  console.log(tamanhoObj(lesson3)) 



/* 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
 */
  const listaValorObj = (obj2) => Object.values(obj2)
  console.log(listaValorObj(lesson2)) 



/* 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
 */
/* resolução1 */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
/* resoçução2 */
   /* allLessons.lesson1 = Object.assign({},lesson1)
   allLessons.lesson2 = Object.assign({},lesson2)
   allLessons.lesson3 = Object.assign({},lesson3)  */

  console.log(allLessons)


/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
 */
  const numeroTotalDeEstudantes = () =>{
    return ` o numero total de estutantes é ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}` 
  }
  console.log(numeroTotalDeEstudantes());

/* 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */

  const getValueByNumber = (obj, n) =>{
    return Object.values(obj)[n]
  }
  console.log(getValueByNumber(lesson1, 0))


  // 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

  const verifyPair = (obj, key, value) =>{
    const objeto = Object.entries(obj)
    for(let i in objeto){
        if(objeto[i][0] === key && objeto[i][1] === value){
            return true
        }
    }
    return false
  }
  console.log(verifyPair(lesson3, 'turno', 'noite'))



//// bonus

  // - 1 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const quantidadeEstudantes = (obj) =>{
    let n1 = obj.lesson1.numeroEstudantes    
    let n3 = obj.lesson1.numeroEstudantes
    return n1 + n3
}
console.log(quantidadeEstudantes(allLessons))



// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: