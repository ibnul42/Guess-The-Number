let correctNumber = getRandomNumber();
let guess = [];
console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);    
}

function initGame() {
    correctNumber = getRandomNumber();
    guess = [];
    displayHistory();
    document.getElementById("result").innerHTML = '';
    console.log(correctNumber);
}

function playGame() {
    let numberGuess = document.getElementById('number-guess').value;  
    let passedNumber = parseInt(numberGuess);
    displayResult(passedNumber);
    displayHistory();   
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function displayResult(passedNumber) {
    if(passedNumber === correctNumber) {
        showYouWon();
        saveGuessHistory(passedNumber);
    }
    if(passedNumber > correctNumber) {
        showYouAbove();
        saveGuessHistory(passedNumber);
    }
    if(passedNumber < correctNumber) {
        showYouBelow();
        saveGuessHistory(passedNumber);
    }
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case"warning": 
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case"won": 
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
        case"danger": 
            dialog = "<div class='alert alert-danger' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon() {
    const text = "Awesome, you got it!";
    let dialog;

    dialog = getDialog("won", text);
    document.getElementById('result').innerHTML = dialog;
}

function showYouAbove() {
    const text = "You got it too high";
    let dialog;

    dialog = getDialog("danger", text);
    document.getElementById('result').innerHTML = dialog;
}

function showYouBelow() {
    const text = "You got it too low";
    let dialog;

    dialog = getDialog("warning", text);
    document.getElementById('result').innerHTML = dialog;
}

function saveGuessHistory(myGuess) {
    guess.push(myGuess);
}

function displayHistory() {
    let index = guess.length - 1;
    let list = "<ul class='list-group'>";
    while(index >= 0) {
        list += "<li class='list-group-item'>" + "You guessed: " + guess[index] + "</li>";
        index -= 1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}