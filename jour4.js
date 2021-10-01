// Exercice 1 : Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}

console.log(cat.age)
console.log(cat["age"])

if (cat.isCute === true) {
    console.log("So cute !")
}

// Exercice 2 : Combine

var cat2 = {
    name: "Jeremy",
    age: 29,
    isCute: true
}

var cats = [cat, cat2]

console.log(cats)

console.log(cat.age)
console.log(cats[0].age)
console.log(cat["age"])
console.log(cats[0]["age"])

console.log(cat.isCute)
console.log(cats[1].isCute)
console.log(cat["isCute"])
console.log(cats[1]["isCute"])

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
        console.log(`${num1} is bigger than ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} is bigger than ${num1}`)
    } else { console.log(`${num1} & ${num2} are both the same`) }
}

compare(22, 24)


// Exercice 5 : Add up 
function addUp(num) {
    var result = 0
    for (var i = 1; i <= num; i++) {
        result += i
    } console.log(result)
    return result
}

var sum = addUp(12)
console.log(sum)



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

function generatedPassword(num) {
    var randomString = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = 0; i < num; i++) {
        result = result + randomString.charAt(Math.floor(Math.random() * randomString.length))

    } if (num < 6 || num > 15) {
        console.log("Error")
    } else {
        console.log(result)
    }
}
generatedPassword(10)

// Bonus II 

function launchDice(numberOfDice) {
    var result = 0
    for (var i = 0; i <= numberOfDice; i++) {
        var de = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        result = result + de
    } return result
}
var joueur1 = launchDice(5)
var joueur2 = launchDice(5)
console.log(joueur1, joueur2)

if (joueur1 > joueur2) {
    console.log(`Player 1 is the winner with ${joueur1}`)
} else if (joueur2 > joueur1) {
    console.log(`Player 2 is the winner with ${joueur2}`)
} else if (joueur1 === joueur2) {
    console.log(`Player 1 and Player 2 are equals with ${joueur1}`)
}
