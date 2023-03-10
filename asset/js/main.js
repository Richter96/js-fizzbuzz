/* 

Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?

*/


/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//Scrivere in console.log numeri da 1 a 100
const ulElement = document.createElement("ul");
const liElement = document.createElement("li")

for (let i = 1; i < 101; i++) {

    if (i % 3 == 0) {
        
    } else if (i % 5 == 0) {
        
    } else if (i % 3 == 0 && i % 5 == 0) {
        
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        
    }
    liElement.append(`${i}${fizz}${buzz}${fizzbuzz}`);
}


ulElement.append(liElement)

console.log(ulElement);



