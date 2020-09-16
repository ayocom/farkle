console.log('Hello World!')

// variables

//bucket that holds one piece of data

// declare - assign a value

// let x = 3
// let y = 4
// let z = x + y

// z = z + 10

// let word = 'this is a string'
// let sentence = "this is a string"
// let sentence2 = `z is ${z}`

// let name = 'Bob'

// console.log(x)
// console.log(`Build a string ${x}`)

// console.log(`Hi ${name}`)

// let answer = prompt('Question?')

// console.log(`Your answered: ${answer}`)

//Ask user for name, ask for last 3 test scores,
//0-100, one at a time, then calculate test average
//log name + avg

let nameEl = document.getElementById('name')
let avgEl = document.getElementById('avg')

console.log(nameEl)


let name = prompt(`What is your name?`)

nameEl.innerHTML = `Hi ${name}`

let test1 = prompt(`What was your first test score?`)
let test2 = prompt(`What was you second test score?`)
let test3 = prompt(`What was your third test score?`)


test1 = parseInt(test1, 10)
test2 = parseInt(test2, 10)
test3 = parseInt(test3, 10)

let testAvg = (test1 + test2 + test3) / 3

avgEl.innerHTML = `Your test average is ${testAvg}`

console.log(`Hi ${name}. Your test average: ${testAvg}`)

//mad lib generator

