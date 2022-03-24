
 window.onload = function(){ 

    function mudaCorFundo(color){
        let conteudo = document.querySelector('.conteudo') 
        switch(color){
            case 'branco':
                color = 'white';
            break
            case 'preto':
                color = 'black';
            break
            case 'verde':
                color = 'green';
            break
            case 'azul':
                color = 'blue';
            break
            case 'amarelo':
                color = 'yellow';
            break

        }      
        conteudo.style.backgroundColor = color
                
        localStorage.setItem('backgroundColor', color)
    }
    
    
    // cor do fundo
    let botaoFundo = document.querySelectorAll('#background-color button')
    for(let index = 0; index < botaoFundo.length; index += 1){        
        botaoFundo[index].addEventListener('click', function(event){
            mudaCorFundo(event.target.innerHTML)
            
        })
    }

    // cor fonte
    function mudaCorFonte(color){
        let p = document.querySelectorAll('.paragrafo')
        switch(color){
            case 'branco':
                color = 'white';
            break
            case 'preto':
                color = 'black';
            break
            case 'verde':
                color = 'green';
            break
            case 'azul':
                color = 'blue';
            break
            case 'amarelo':
                color = 'yellow';
            break

        }        
        for(let index = 0; index < p.length ; index += 1){
            p[index].style.color = color
        }
        localStorage.setItem('color', color)
    }
    let corFonte = document.querySelectorAll('#corFonte button')
    for(let index = 0; index < corFonte.length; index += 1){
        corFonte[index].addEventListener('click', function(event){
            mudaCorFonte(event.target.innerHTML)
            
        })
    }



    // tamanho da fonte

    function mudaTamanhoFonte(fonte){
        let p = document.querySelectorAll('.paragrafo')
        for(let index = 0; index < p.length; index += 1){
            p[index].style.fontSize = fonte
            
        }
        localStorage.setItem('fontSize', fonte)
    }
    let mudaTFonte = document.querySelectorAll('#tamanhoFonte button')
    for(let index = 0; index < mudaTFonte.length; index += 1){
        mudaTFonte[index].addEventListener('click', function(event){
            mudaTamanhoFonte(event.target.innerHTML)
            
        })
    }

   // espaçamento das linhas

    function mudaEspacamentoLinhas(lineHeight){
        let p = document.querySelectorAll('.paragrafo')
        for(let index = 0; index < p.length; index += 1){
            if(lineHeight === 'padrao'){
                lineHeight = 'normal'
            }
            p[index].style.lineHeight = lineHeight
            
            
        }
        localStorage.setItem('lineHeight', lineHeight)

    }

    let mudaEspacoLinha = document.querySelectorAll('#espacamentoLinhas button')
    for(let index = 0; index < mudaEspacoLinha.length; index += 1){
        mudaEspacoLinha[index].addEventListener('click', function(event){
            mudaEspacamentoLinhas(event.target.innerHTML)
        })
    }

    // familia da fonte

    function mudaTipoFonte(event){
        let p = document.querySelectorAll('.paragrafo')        
        let evento = event
        for(let index = 0; index < p.length; index += 1){
            p[index].style.fontFamily = evento
            
        }
        localStorage.setItem('fontFamily', evento)
    }

    let tipoDaFonte = document.querySelectorAll('#tipoFonte button')
    for(let cont = 0; cont < tipoDaFonte.length; cont += 1){
        tipoDaFonte[cont].addEventListener('click', function(event){
            mudaTipoFonte(event.target.innerHTML)
        })
    }

    function outrasCores(event){
        let p = document.querySelectorAll('.paragrafo')           
        let valores = event
        
        for(let index = 0; index < p.length; index += 1){
            p[index].style.backgroundColor = valores
        }
        localStorage.setItem('backgroundColor2', valores)
    }

    let maisCores = document.querySelector('#background-color2')
    maisCores.addEventListener('input', function(event){
        outrasCores(event.target.value)
        
    })

     function outrosTamanhos(fonteTamanho){
       let p = document.querySelectorAll('.paragrafo')
       let evento = fonteTamanho    
       
       
       for(let cont = 0; cont < p.length; cont += 1){
           p[cont].style.fontSize = evento + 'px'
       }       
        localStorage.setItem('maisTamanhos2', evento) 
    } 
    

     let maisTamanhos = document.querySelector('#maisTamanhos')
    maisTamanhos.addEventListener('input', function(event){
        outrosTamanhos(event.target.value)
        
        
    }) 


    
        

    function carregar(){
        let backgroundColor = localStorage.getItem('backgroundColor')
        if(backgroundColor) mudaCorFundo(backgroundColor)

        let color = localStorage.getItem('color')
        if(color) mudaCorFonte(color)

        let fontSize = localStorage.getItem('fontSize')
        if(fontSize) mudaTamanhoFonte(fontSize)

        let lineHeight = localStorage.getItem('lineHeight')
        if(lineHeight) mudaEspacamentoLinhas(lineHeight)

        let fontFamily = localStorage.getItem('fontFamily')
        if(fontFamily) mudaTipoFonte(fontFamily)

        let backgroundColor2 = localStorage.getItem('backgroundColor2')
        if(backgroundColor2) outrasCores(backgroundColor2)

        let maisTamanhos2 = localStorage.getItem('maisTamanhos2')
        if(maisTamanhos2) outrosTamanhos(maisTamanhos2)
    }
    carregar()
 } 




 