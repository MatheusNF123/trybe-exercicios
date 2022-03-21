
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
            console.log(p[index])
            
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
        let eventoTarget = event.target.innerHTML
        console.log(eventoTarget)
        for(let index = 0; index < p.length; index += 1){
            p[index].style.fontFamily = eventoTarget
            
        }
        localStorage.setItem('fontFamily', eventoTarget)
    }

    let tipoDaFonte = document.querySelectorAll('#tipoFonte button')
    for(let cont = 0; cont < tipoDaFonte.length; cont += 1){
        tipoDaFonte[cont].addEventListener('click', mudaTipoFonte)
    }

    function outrasCores(event){
        let p = document.querySelectorAll('.paragrafo')           
        let valores = event.target.value
        for(let index = 0; index < p.length; index += 1){
            p[index].style.backgroundColor = valores
        }
        localStorage.setItem('backgroundColor2', valores)
    }

    let maisCores = document.querySelector('#background-color2')
    maisCores.addEventListener('input', outrasCores)

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

        let backgroundColor2 = localStorage.getItem(backgroundColor2)
        if(backgroundColor2) outrasCores(backgroundColor2)
    }
    carregar()
 } 