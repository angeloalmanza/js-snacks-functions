/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * funzione che conta il numero di vocali all'interno di una parola
 * @param {string} parola
 * @returns {number}
 */
const vocalCounter = (parola) => {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for(let i = 0; i < parola.length; i++){
        if(vocali.includes(parola[i].toLowerCase())){
            counter++;
        }
    }
    return counter;
}


// Invoca la funzione qui e stampa il risultato in console
const vocalNumber = vocalCounter(word);
console.log(`Il numero delle vocali nella parola ${word} è ${vocalNumber}`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)