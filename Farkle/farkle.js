//Roll Button
let rollButton = document.getElementById('roll')



//Dice One Elements
let diceOneOneEl = document.getElementById('d1One')
let diceOneTwoEl = document.getElementById('d1Two')
let diceOneThreeEl = document.getElementById('d1Three')
let diceOneFourEl = document.getElementById('d1Four')
let diceOneFiveEl = document.getElementById('d1Five')
let diceOneSixEl = document.getElementById('d1Six')



//Dice Two Elements
let diceTwoOneEl = document.getElementById('d2One')
let diceTwoTwoEl = document.getElementById('d2Two')
let diceTwoThreeEl = document.getElementById('d2Three')
let diceTwoFourEl = document.getElementById('d2Four')
let diceTwoFiveEl = document.getElementById('d2Five')
let diceTwoSixEl = document.getElementById('d2Six')



//Dice 3 Elements
let diceThreeOneEl = document.getElementById('d3One')
let diceThreeTwoEl = document.getElementById('d3Two')
let diceThreeThreeEl = document.getElementById('d3Three')
let diceThreeFourEl = document.getElementById('d3Four')
let diceThreeFiveEl = document.getElementById('d3Five')
let diceThreeSixEl = document.getElementById('d3Six')



//Dice Four Elements
let diceFourOneEl = document.getElementById('d4One')
let diceFourTwoEl = document.getElementById('d4Two')
let diceFourThreeEl = document.getElementById('d4Three')
let diceFourFourEl = document.getElementById('d4Four')
let diceFourFiveEl = document.getElementById('d4Five')
let diceFourSixEl = document.getElementById('d4Six')




//Dice Five Elements
let diceFiveOneEl = document.getElementById('d5One')
let diceFiveTwoEl = document.getElementById('d5Two')
let diceFiveThreeEl = document.getElementById('d5Three')
let diceFiveFourEl = document.getElementById('d5Four')
let diceFiveFiveEl = document.getElementById('d5Five')
let diceFiveSixEl = document.getElementById('d5Six')



//Dice Six Elements
let diceSixOneEl = document.getElementById('d6One')
let diceSixTwoEl = document.getElementById('d6Two')
let diceSixThreeEl = document.getElementById('d6Three')
let diceSixFourEl = document.getElementById('d6Four')
let diceSixFiveEl = document.getElementById('d6Five')
let diceSixSixEl = document.getElementById('d6Six')



//Roll Button Event Listeners
rollButton.addEventListener('click', hideDice)
rollButton.addEventListener('click', rollDice)



//Hide Dice every roll
function hideDice() {
    diceOneOneEl.classList.add('remove')
    diceOneTwoEl.classList.add('remove')
    diceOneThreeEl.classList.add('remove')
    diceOneFourEl.classList.add('remove')
    diceOneFiveEl.classList.add('remove')
    diceOneSixEl.classList.add('remove')

    diceTwoOneEl.classList.add('remove')
    diceTwoTwoEl.classList.add('remove')
    diceTwoThreeEl.classList.add('remove')
    diceTwoFourEl.classList.add('remove')
    diceTwoFiveEl.classList.add('remove')
    diceTwoSixEl.classList.add('remove')

    diceThreeOneEl.classList.add('remove')
    diceThreeTwoEl.classList.add('remove')
    diceThreeThreeEl.classList.add('remove')
    diceThreeFourEl.classList.add('remove')
    diceThreeFiveEl.classList.add('remove')
    diceThreeSixEl.classList.add('remove')

    diceFourOneEl.classList.add('remove')
    diceFourTwoEl.classList.add('remove')
    diceFourThreeEl.classList.add('remove')
    diceFourFourEl.classList.add('remove')
    diceFourFiveEl.classList.add('remove')
    diceFourSixEl.classList.add('remove')

    diceFiveOneEl.classList.add('remove')
    diceFiveTwoEl.classList.add('remove')
    diceFiveThreeEl.classList.add('remove')
    diceFiveFourEl.classList.add('remove')
    diceFiveFiveEl.classList.add('remove')
    diceFiveSixEl.classList.add('remove')

    diceSixOneEl.classList.add('remove')
    diceSixTwoEl.classList.add('remove')
    diceSixThreeEl.classList.add('remove')
    diceSixFourEl.classList.add('remove')
    diceSixFiveEl.classList.add('remove')
    diceSixSixEl.classList.add('remove')
}



//Roll All Dice and Show on Screen 
function rollDice() {
    let rolld1 = getRandomInt(6)
   //console.log(rolld1)
    if (rolld1 === 1) {
        diceOneOneEl.classList.remove('remove')
    } else if (rolld1 === 2) {
        diceOneTwoEl.classList.remove('remove')
    } else if (rolld1 === 3) {
        diceOneThreeEl.classList.remove('remove')
    } else if (rolld1 === 4) {
        diceOneFourEl.classList.remove('remove')
    } else if (rolld1 === 5) {
        diceOneFiveEl.classList.remove('remove')
    } else if (rolld1 === 6) {
        diceOneSixEl.classList.remove('remove')
    }
    let rolld2 = getRandomInt(6)
    //console.log(rolld2)
    if (rolld2 === 1) {
        diceTwoOneEl.classList.remove('remove')
    } else if (rolld2 === 2) {
        diceTwoTwoEl.classList.remove('remove')
    } else if (rolld2 === 3) {
        diceTwoThreeEl.classList.remove('remove')
    } else if (rolld2 === 4) {
        diceTwoFourEl.classList.remove('remove')
    } else if (rolld2 === 5) {
        diceTwoFiveEl.classList.remove('remove')
    } else if (rolld2 === 6) {
        diceTwoSixEl.classList.remove('remove')
    }
    let rolld3 = getRandomInt(6)
    if (rolld3 === 1) {
        diceThreeOneEl.classList.remove('remove')
    } else if (rolld3 === 2) {
        diceThreeTwoEl.classList.remove('remove')
    } else if (rolld3 === 3) {
        diceThreeThreeEl.classList.remove('remove')
    } else if (rolld3 === 4) {
        diceThreeFourEl.classList.remove('remove')
    } else if (rolld3 === 5) {
        diceThreeFiveEl.classList.remove('remove')
    } else if (rolld3 === 6) {
        diceThreeSixEl.classList.remove('remove')
    }
    let rolld4 = getRandomInt(6)
    if (rolld4 === 1) {
        diceFourOneEl.classList.remove('remove')
    } else if (rolld4 === 2) {
        diceFourTwoEl.classList.remove('remove')
    } else if (rolld4 === 3) {
        diceFourThreeEl.classList.remove('remove')
    } else if (rolld4 === 4) {
        diceFourFourEl.classList.remove('remove')
    } else if (rolld4 === 5) {
        diceFourFiveEl.classList.remove('remove')
    } else if (rolld4 === 6) {
        diceFourSixEl.classList.remove('remove')
    }
    let rolld5 = getRandomInt(6)
    if (rolld5 === 1) {
        diceFiveOneEl.classList.remove('remove')
    } else if (rolld5 === 2) {
        diceFiveTwoEl.classList.remove('remove')
    } else if (rolld5 === 3) {
        diceFiveThreeEl.classList.remove('remove')
    } else if (rolld5 === 4) {
        diceFiveFourEl.classList.remove('remove')
    } else if (rolld5 === 5) {
        diceFiveFiveEl.classList.remove('remove')
    } else if (rolld5 === 6) {
        diceFiveSixEl.classList.remove('remove')
    }
    let rolld6 = getRandomInt(6)
    if (rolld6 === 1) {
        diceSixOneEl.classList.remove('remove')
    } else if (rolld6 === 2) {
        diceSixTwoEl.classList.remove('remove')
    } else if (rolld6 === 3) {
        diceSixThreeEl.classList.remove('remove')
    } else if (rolld6 === 4) {
        diceSixFourEl.classList.remove('remove')
    } else if (rolld6 === 5) {
        diceSixFiveEl.classList.remove('remove')
    } else if (rolld6 === 6) {
        diceSixSixEl.classList.remove('remove')
    }    
    
}



//Random Function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1)
}
