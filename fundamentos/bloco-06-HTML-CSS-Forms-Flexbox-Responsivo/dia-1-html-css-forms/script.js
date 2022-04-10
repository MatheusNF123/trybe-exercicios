let reset = document.getElementById('reset')
reset.addEventListener('click', function(event){
     event.preventDefault() 
})

let submit = document.getElementById('sub')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let textA = document.getElementById('textA')


submit.addEventListener('click', verifica)

function verifica(){
     if(nome.value.length > 40 || nome.value.length < 10 || email.value.length > 40 || email.value.length < 10){
          window.alert('Dados Inválidos')
     }     
     else{
          window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
     }
}

