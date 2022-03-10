//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "Tesoura";
let player2 = "Papel";

switch (player1){
    case "Tesoura":
        if(player2 === "Pedra"){
            console.log("Player 2 won");
        } else if (player2 === "Papel"){
            console.log("Player 1 won");
        } else {
            console.log("A tie");
        }
        break;
    case "Pedra":
        if(player2 === "Pedra"){
            console.log("A tie");
        } else if (player2 === "Papel"){
            console.log("Player 2 won");
        } else {
            console.log("Player 1 won");
        }
        break;

    case "Papel":
        if(player2 === "Pedra"){
            console.log("Player 1 won");
        } else if (player2 === "Papel"){
            console.log("A tie");
        } else {
            console.log("Player 2 won");
        }
        break;
    }