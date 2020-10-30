//function- named sequence of code, repeat, reuse, simplify problems, later - on a user event

console.log('Code Started')

function doStuff() {
    console.log('Inside doStuff')
}


function sayHi(name) { // parameter
    console.log(`Hi there ${name}`)
}


sayHi('Alice') //Alice //argument
sayHi('Bob') // Bob
sayHi('Carol') // Carol

doStuff()


let clickMeEl = document.getElementById('clickme')
let clickCount = 0

function hasBeenClicked() {
    console.log('You clicked the text')
    clickCount = clickCount + 1
    console.log(`ClickCount: ${clickCount}`)
}

clickMeEl.addEventListener('click', hasBeenClicked)



console.log('Code Ended')