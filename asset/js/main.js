/* 

Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?

*/

// creo ul in dom
const ulElement = document.createElement("ul")
console.log(ulElement)


const BodyElement = document.querySelector("body")
BodyElement.append(ulElement)

for (let i = 0; i < 50; i++) {
    // console.log(i)

    const liElement = document.createElement("li")
// all'liElement do valore i
    liElement.append(i)
// all'liElement do valore i
    ulElement.append(liElement)
    
    if ( i % 3 == 0) {
        i = ('Frizz')
    } else 
}