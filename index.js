const MESSAGEP1 = "Player 1, choose a number between 0 and 50"
const MESSAGEP2 = "Player 2, try to guess the number : it's between 0 and 50"
// déclaration des messages de début de jeu qu'on ajoutera aux prompts de player 1 et player 2

function chooseNumber() {
    let numberP1 = prompt(MESSAGEP1) //stocke dans une variable numberP1 le nombre rentré dans prompt par player 1
    while (numberP1 <0 || numberP1 >50) { //tant que valeur de numberP1 est inférieure à 0 ou supérieure à 50
        numberP1 = prompt("Number must be between 0 and 50 ") //alors on change sa valeur en rappelant un prompt avec un message adapté
    }
  return numberP1 // une fois que while est résolue, on retourne numberP1
}

function guessNumber() {
  let numberP2 = prompt(MESSAGEP2) //stocke dans une variable numberP2 le nombre rentré dans prompt par player 2
    while (numberP2 <0 || numberP2 >50) { // tant que valeur de numberP2 est inférieure à 0 ou supérieure à 50
        numberP2 = prompt("Number must be between 0 and 50 ") //alors on change sa valeur en rappelant un prompt avec un message adapté
    }
  return numberP2 // une fois que while est résolue, on retourne numberP2
}

function didIWin(numberPlayer1,numberPlayer2) { // la fonction prend en paramètre 2 nombres, un choisi par player 1 et l'autre par player 2
  if (numberPlayer1 == numberPlayer2) { // si le nombre choisi par player 1 est égal à celui choisi par player 2
    return true; // didIWin retourne true 
    } else {
      return false; // sinon didIWin retourne false
   } 
}

function gamePlay() {
  let result = didIWin(givenNumber,guessNumber()) // on stocke dans result le true ou false que retourne didIWin quand elle est appelée
  // avec en paramètre variable (qui récup nombre de player1) + guessNumber(nombre de P2)
  while (result == false) { // tant que result est égal à false
    result = didIWin(givenNumber,guessNumber()) // on rappelle la fonction didIWIn avec mêmes paramètres
  }
  if (result == true) { //si result est égal à true 
    document.querySelector('p').innerText = "You won !" //on modifie le texte de la page HTML pour afficher que P2 a gagné
  }
}

let givenNumber = chooseNumber() // on déclare une variable et on lui attribue le nombre retourné par chooseNumber en appelant la fonction 

gamePlay() // on appelle gamePlay pour que le jeu se lance