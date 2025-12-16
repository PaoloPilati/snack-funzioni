/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function pickByFirstLetter (array, initial) {
        return array.filter(name => name[0].toUpperCase() === initial.toUpperCase());
}

//funzione esplosa:
    //return array.filter(function (name) {
        //return name[0] === initial;}
        //);

//Arrow function:

//const pickByFirstLetter = (array, initial) => array.filter(name => name[0] === initial);



// Invoca la funzione qui e stampa il risultato in console

console.log(pickByFirstLetter(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]