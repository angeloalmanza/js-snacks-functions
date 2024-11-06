/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const FirstLetterName = (nomi) => {
    let initials = [];
    for(let i = 0; i < nomi.length; i++){
        initials.push(nomi[i][0]);
    }
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console
const initials = FirstLetterName(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]