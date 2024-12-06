/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = prompt("inserisci il tuo nome");


// Dichiara la funzione qui.
const saluto = (name) => {
    const orario = new Date().getHours();
    if(orario < 13){
        return "buongiorno"
    } else if(orario < 17){
        return "buon pomeriggio"
        } else{
        return "buonasera"
        }
}

console.log(saluto(name) + " " + name)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.