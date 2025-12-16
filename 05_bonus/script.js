/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

//*FONTI: https://medium.com/@elechristacoal/the-new-date-gethours-method-in-javascript-24cee15f1468

function greetingsFormula (username) {
//ARROW FUNCTION: const greetingsFormula = (username) => {...}
    let hour = new Date().getHours();

    if (hour < 13) {
        return `Buongiorno, ${username}.`;
    } else if (hour < 17) {
        return `Buon pomeriggio, ${username}.`;
    } else {
        return `Buonasera, ${username}.`;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingsFormula(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.