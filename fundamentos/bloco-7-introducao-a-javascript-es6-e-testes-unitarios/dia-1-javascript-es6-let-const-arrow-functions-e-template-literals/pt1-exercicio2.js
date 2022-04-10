/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const result = (array) => {
    for (let cont = 0; cont < array.length; cont += 1){
        for(let cont1 = 0; cont1 < array.length; cont1 +=1){
            if(array[cont1] > array[cont1 + 1]){
                let pegaValor = array[cont1]
                array[cont1] = array[cont1+1]
                array[cont1+1] = pegaValor               
            }            
        }   
    }
    
    return array;
}
console.log(result(oddsAndEvens)) */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaNumeros = (array) => {

    const arraySort = array.sort((a,b) => (a-b));
    return arraySort
}
console.log(`Os números ${ordenaNumeros(oddsAndEvens)} `);