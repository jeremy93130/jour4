// Exercice 1 : Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
// console.log(cat)

// Exercice 2 : Combine

var cat2 = {
    name: "Jeremy",
    age: 29,
    isCute: true
}

var cats = [cat, cat2]

// console.log(cats)

// console.log(cat.age)
// console.log(cat["age"])

// console.log(cat.isCute)
// console.log(cat["isCute"])

// Exercice 3 : Even 

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    } else (console.log("odd"))
}

checkIfEven(47)
checkIfEven(46)

// Exercice 4 : Compare 

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`)
    } else if (num1 < num2) {
        console.log(`${num2} is bigger`)
    } else { console.log(`${num1} & ${num2} are both the same`) }
}

compare(22, 24)


// Exercice 5 : Add up 
function addUp(num) {
    var result = 0
    for (var i = 1; i <= num; i++) {
        result += i
        // } console.log(result)
    }
}

addUp(12)


// Exercice 6 : 

function format(num) {
    var heure = Math.floor(num / 3600)
    var reste = Math.floor(num % 3600)
    var minute = Math.floor(reste / 60)
    var secondes = Math.floor(reste % 60)

    console.log(`il est ${heure} heure , ${minute} minutes et ${secondes} secondes.`)
    console.log(num)
}


format(3700)

// Bonus