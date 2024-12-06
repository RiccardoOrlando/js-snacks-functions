/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = prompt("inserisci nome");

const stringa = (userName) => {
return "ciao " + userName
}

console.log(stringa(userName))
// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario': // ciao Mario
