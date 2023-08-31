/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//ciedere all'utente di inserire una parola
const parolaUtente = prompt("inserire una parola");
console.log(parolaUtente);
//assegnare la stessa parola ma scritta al contrario 
const parolaContrario = parolaUtente.split('').reverse().join('');
console.log(parolaContrario)

//confrontare con un ciclo while se la parola è uguale
//stampare il risultato