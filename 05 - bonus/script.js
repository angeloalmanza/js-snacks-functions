/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * funzione che genera un messaggio di saluto a seconda dell'ora
 * @param {string} nome
 * @returns {string}
 */
const saluta = (nome) => {
    let messagge = '';
    const time = new Date();
    const ore = time.getHours();
    if(ore >= 0 && ore <= 12){
        messagge = `Buongiorno ${nome}`;
    }else if(ore >= 13 && ore <= 17){
        messagge = `Buon pomeriggio ${nome}`;
    }else{
        messagge = `Buonasera ${nome}`;
    }
    return messagge;
}


// Invoca la funzione qui e stampa il risultato in console
const saluto = saluta(name);
console.log(saluto);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.