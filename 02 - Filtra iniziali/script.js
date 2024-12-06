/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const array = (names) => {
    let userLetter = prompt("inserisci una lettera");
    let newarray = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i][0].toLowerCase() === userLetter.toLowerCase()) {
        newarray.push(names[i]);
      }
    }
    return newarray;
  }

  let result = array(names);

  if (result.length > 0) {
    alert(result);
  } else {
    alert("la lettera non è nell'array coglione");
  }


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]