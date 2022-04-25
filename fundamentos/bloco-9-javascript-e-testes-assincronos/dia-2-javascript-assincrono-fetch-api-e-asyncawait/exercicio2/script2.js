function append(moeda) {
    const ol = document.getElementById('listaO')
    const li = document.createElement('li')
    const price = Number(moeda.preço)
    li.innerText = `${moeda.nome} (${moeda.symbolo}): ${price.toFixed(2)} `
    ol.appendChild(li)
    
    }
    
    
    const fetchCoin = () => {
        const api =`https://api.coincap.io/v2/assets`
        fetch(api)
        .then(response => response.json())
    .then(data => {
        data.data.forEach((elemento, index)=> {
            if(index <= 9){           
            const obj = {nome: elemento.name, symbolo: elemento.symbol, preço: elemento.priceUsd}       
            append(obj)
        }
        })
    })
      .catch((error) => error.toString());
        
       
    }
    
    
    window.onload = () => fetchCoin();
        