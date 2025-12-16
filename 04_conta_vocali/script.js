/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.
function charCounter (string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (character.includes(string[i].toLowerCase())) {
            count++;
            }
}
return count;
}

//inizio arrow function (poi continua con lo stesso ciclo for): const charCounter = (string, character) => {...

// Invoca la funzione qui e stampa il risultato in console

console.log(charCounter(word, vowels));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)