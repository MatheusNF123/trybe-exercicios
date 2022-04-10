// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(event){
    event.preventDefault()
})

INPUT_CHECKBOX.addEventListener('click', function(event){
    event.preventDefault()
})

INPUT_TEXT.addEventListener('keypress', function(event){
    event.preventDefault()
    console.log(event.key)
    if(event.key === 'a'){
        INPUT_TEXT.value += event.key
    }
    else{
        INPUT_TEXT.value = ''
    }
})



