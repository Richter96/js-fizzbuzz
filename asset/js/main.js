/* 

Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?

*/


// dischiaro le costanti 
const ulElement = document.createElement("ul");
const bodyEl = document.querySelector("body")
const containerEl = document.createElement("container")

bodyEl.prepend(containerEl)
containerEl.prepend(ulElement)

//Scrivere in console.log numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    const liElement = document.createElement("li")
    
    ulElement.append(liElement)

    if (i % 3 == 0 && i % 5 == 0) {
        liElement.innerHTML = 'fizzbuzz'
    } else if (i % 5 == 0) {
        liElement.innerHTML = 'buzz'
        liElement.style.backgroundColor = "red"
    } else if (i % 3 == 0)  {
        liElement.innerHTML = 'fizz'
        liElement.style.backgroundColor = "orange"
    } else {
        liElement.innerHTML = i
        liElement.style.backgroundColor = "light"
    }


}


console.log(ulElement)


