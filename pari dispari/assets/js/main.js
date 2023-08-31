/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


 //input utente
 const pariDispari = prompt("pari o dispari");
 let numeroUtente = Number(prompt("inserisci un numero da 1 a 5"));

 if (numeroUtente > 5 || numeroUtente < 1) {

    let numeroUtente = prompt("errore, inserisci un numero da 1 a 5");

 }


 //generazione computer
function randomNumber(biggestNumber){
   const numeroRandom = Math.floor(Math.random() * Number(biggestNumber)) + 1; 
   return numeroRandom;
}
 
const numeroComputer = randomNumber(5)
 console.log("numero computer: " + numeroComputer);
 //somma

 const somma = numeroComputer +  numeroUtente;
 //controllo pari dipari

 function isEven(userNumber){
    if (userNumber % 2 ===0){
        return true;
    }
    return false;
 }

 const result = isEven(somma);
 
 if (isEven(somma)){
    console.log("il numero è pari ");
    if (pariDispari == "pari"){
        console.log(" hai vinto!");
    } else {
        console.log(" hai perso!");

    }
 } else{
    console.log("il numero è dispari")
    if (pariDispari == "dispari"){
        console.log(" hai vinto!");
    } else {
        console.log(" hai perso!");

    }
 }