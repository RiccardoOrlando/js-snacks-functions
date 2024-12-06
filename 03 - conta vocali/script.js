/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocali = (word) => {
    // Definisci un array di vocali
    const countvocali = ["a", "e", "i", "o", "u"];
    let count = 0;  // Variabile per contare le vocali

    // Cicla su ogni carattere della parola
    for (let i = 0; i < word.length; i++) {
        // Se il carattere è una vocale, incrementa manualmente il contatore
        if (countvocali.includes(word[i].toLowerCase())) {
            count = count + 1; 
        }
    }
    // Restituisci il numero di vocali trovate
    return count;
};

console.log(vocali(word));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)