/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * funzione che restituisce un array di nomi che iniziano per una specifica lettera
 * @param {array} nomi
 * @param {string} letter
 * @returns {array}
 */
const searchName = (nomi, letter) => {
    let initials = [];
    for(let i = 0; i < nomi.length; i++){
       if(nomi[i][0] === letter){
        initials.push(nomi[i]);
       }
    }
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console
const userLetter = (prompt("Inserisci una lettera")).toUpperCase();
const initials = searchName(names, userLetter);
console.log(initials);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]