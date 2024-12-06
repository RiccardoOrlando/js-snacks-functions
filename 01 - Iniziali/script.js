/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const firstletter = (names) => {
    // Inizializza un nuovo array vuoto.
    let newarray = [];
    // Cicla su ogni elemento dell'array fornito.
    for (let i = 0; i < names.length; i++) {
        // Aggiungi all'array nuovo l'iniziale della parola corrente
        newarray[i] = names[i][0];
}
return newarray
}
// Invoca la funzione qui e stampa il risultato in console
alert(firstletter(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]