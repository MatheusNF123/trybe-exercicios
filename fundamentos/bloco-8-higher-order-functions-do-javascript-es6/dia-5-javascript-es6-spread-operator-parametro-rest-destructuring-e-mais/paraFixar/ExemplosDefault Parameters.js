// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting('matheus'); // Welcome usuário!




// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

  const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!


// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.



const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value
  };
  
  console.log(multiply(8,2));
