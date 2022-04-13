// 1 - Dada uma matriz, transforme em um array.


    const arrays = [
        ['1', '2', '3'],
        [true],
        [4, 5, 6],
      ];
      
      function flatten(objeto) {
        // escreva seu código aqui
        return objeto.reduce((acc, elemento) => acc.concat(elemento),[])

      }
      console.log(flatten(arrays));

// -------- //
// outro modo de fazer 
      function flatten(objeto) {
        // escreva seu código aqui
        return objeto.reduce((acc, elemento) =>{
          acc.push(...elemento)
          return acc
        },[])
      }

      console.log(flatten(arrays));