const playerOne = prompt("Elija piedra, papel o tijera");
const playerTwo = prompt("Elija piedra, papel o tijera");

/*
const rock = (handOne, handTwo) => {
    if (handOne == "piedra" && handTwo == "piedra") {
        alert("Empate");
    } else if (handOne == "piedra" && handTwo == "papel") {
        alert("Gana papel");
    } else if (handOne == "piedra" && handTwo == "tijera") {
        alert("Gana piedra");
    }
}; 

const paper = (handOne, handTwo) => {
    if (handOne == "papel" && handTwo == "papel") {
        alert("Empate");
    } else if (handOne == "papel" && handTwo == "piedra") {
        alert("Gana papel");
    } else if (handOne == "papel" && handTwo == "tijera") {
        alert("Gana tijera");
    } 
};

const scissor = (handOne, handTwo) => {
    if (handOne == "tijera" && handTwo == "tijera") {
        alert("Empate");
    } else if (handOne == "tijera" && handTwo == "papel") {
        alert("Gana tijera");
    } else if (handOne == "tijera" && handTwo == "piedra") {
        alert("Gana piedra");
    } 
};

const rockPaperScissor = (a, b) => {
    rock(a, b);
    paper(a, b);
    scissor(a, b);
};
*/
const rockPaperScissor = (jugadorA,jugardorB)=>{
    if(jugadorA == jugardorB){
      return "¡Empate!"
    }else if(jugadorA == "tijera" && jugardorB =="papel" || jugadorA == "papel" && jugardorB=="tijera"){
      return "¡Ganó tijera!"
    }else if(jugadorA == "tijera" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="tijera"){
      return "¡Ganó piedra!"
    }else if(jugadorA == "papel" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="papel"){
      return "¡Ganó papel!"
    }
  }
const game = rockPaperScissor(playerOne, playerTwo);
