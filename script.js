var score = 0;

var cardQuestion = document.querySelector(".card-title");
var answerCheck = document.querySelector(".card-footer");
var buttonOne = document.getElementById("button-index-0");
var buttonTwo = document.getElementById("button-index-1");
var buttonThree = document.getElementById("button-index-2");
var buttonFour = document.getElementById("button-index-3");
var timerElement = document.getElementById("timerText");
var resultText = document.getElementById("cardResult");
var resultForm = document.getElementById("form");

resultForm.style.visibility = "hidden";
answerCheck.style.visibility = "hidden";


var questions = [
    { q: "Commonly used data types DO NOT include", a: "alerts" },
    { q: "The condition in an if/else statement is enclosed within_____.", a: "parentheses" },
    { q: "Array in JavaScript can be used to store_____.", a: "all of the above" },
    { q: "String values must be enclosed within_____when being assigned to variables.", a: "quotes" },
    { q: "A very useful tool used during development and debugging for printing content to the debugger is:", a: "console log" },
];

if (cardQuestion.textContent = JSON.stringify(questions[0].q)) {
    buttonOne.textContent = "strings";
    buttonTwo.textContent = "booleans";
    buttonThree.textContent = "alerts";
    buttonFour.textContent = "numbers";
};

buttonOne.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonOne.textContent === "strings") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonOne.textContent === "curly brackets") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        thirdCard();
    } else if (buttonOne.textContent === "numbers and strings") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        fourthCard();
    } else if (buttonOne.textContent === "commas") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        fifthCard();
    } else {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        sixthCard();
    }
});

buttonTwo.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonTwo.textContent === "booleans") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonTwo.textContent === "quotes") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        thirdCard();
    } else if (buttonTwo.textContent === "other arrays") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        fourthCard();
    } else if (buttonTwo.textContent === "curly brackets") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        fifthCard();
    } else {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        sixthCard();
    }
});

buttonThree.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonThree.textContent === "alerts") {
        score+=20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.visibility = "visible";
        secondCard();
    } else if (buttonThree.textContent === "parentheses") {
        score+=20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.visibility = "visible";
        thirdCard();
    } else if (buttonThree.textContent === "booleans") {
        score-=5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.visibility = "visible";
        fourthCard();
    } else if (buttonThree.textContent === "quotes") {
        score+=20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.visibility = "visible";
        fifthCard();
    } else if (buttonThree.textContent === "for loops") {
        score-=5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.visibility = "visible";
        sixthCard();
    }
});

buttonFour.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonFour.textContent === "numbers") {
        score-=5;
        answerCheck.style.visibility = "visible";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonFour.textContent === "square brackets") {
        score-=5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.visibility = "visible";
        thirdCard();
    } else if (buttonFour.textContent === "all of the above") {
        score+=20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.visibility = "visible";
        fourthCard();
    } else if (buttonFour.textContent === "parentheses") {
        score-=5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.visibility = "visible";
        fifthCard();
    } else if (buttonFour.textContent === "console log") {
        score+=20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.visibility = "visible";
        sixthCard();
    }
});

function secondCard() {
    cardQuestion.textContent = JSON.stringify(questions[1].q);
    if (cardQuestion.textContent = JSON.stringify(questions[1].q)) {
        buttonOne.textContent = "curly brackets";
        buttonTwo.textContent = "quotes";
        buttonThree.textContent = "parentheses";
        buttonFour.textContent = "square brackets";
    }
};

function thirdCard() {
    cardQuestion.textContent = JSON.stringify(questions[2].q);
    if (cardQuestion.textContent = JSON.stringify(questions[2].q)) {
        buttonOne.textContent = "numbers and strings";
        buttonTwo.textContent = "other arrays";
        buttonThree.textContent = "booleans";
        buttonFour.textContent = "all of the above";
    }
};

function fourthCard() {
    cardQuestion.textContent = JSON.stringify(questions[3].q);
    if (cardQuestion.textContent = JSON.stringify(questions[3].q)) {
        buttonOne.textContent = "commas";
        buttonTwo.textContent = "curly brackets";
        buttonThree.textContent = "quotes";
        buttonFour.textContent = "parentheses";
    }
};

function fifthCard() {
    cardQuestion.textContent = JSON.stringify(questions[4].q);
    if (cardQuestion.textContent = JSON.stringify(questions[4].q)) {
        buttonOne.textContent = "JavaScript";
        buttonTwo.textContent = "terminal/bash";
        buttonThree.textContent = "for loops";
        buttonFour.textContent = "console log";
    }
};

function sixthCard() {
    cardQuestion.textContent = "All done!";
    buttonOne.style.visibility = "hidden";
    buttonTwo.style.visibility = "hidden";
    buttonThree.style.visibility = "hidden";
    buttonFour.style.visibility = "hidden";
    answerCheck.style.visibility = "hidden";
    resultText.innerHTML = "Your final score is " + score + ".";
    resultForm.style.visibility = "visible";
    timerElement.innerHTML = "Time: ";
};

(function() {
    var timeLeft = 75;
    function startTimer(){

        var timer = setInterval(function(){
            timeLeft--;
            timerElement.innerHTML = "Time: " + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.innerHTML = "Time: ";
                sixthCard();
            }
        }, 1000);
    }
    buttonOne.addEventListener('click', function() {
        if(answerCheck.textContent === "Wrong!"){
            timeLeft -= 10;
            timerElement.innerHTML = "Time: " + timeLeft;
        }
    });
    buttonTwo.addEventListener('click', function() {
        if(answerCheck.textContent === "Wrong!"){
            timeLeft -= 10;
            timerElement.innerHTML = "Time: "+ timeLeft;
        }
    });
    buttonThree.addEventListener('click', function() {
        if(answerCheck.textContent === "Wrong!"){
            timeLeft -= 10;
            timerElement.innerHTML = "Time: "+ timeLeft;
        }
    });
    buttonFour.addEventListener('click', function() {
        if(answerCheck.textContent === "Wrong!"){
            timeLeft -= 10;
            timerElement.innerHTML = "Time: "+ timeLeft;
        }
    });
    startTimer();
})();
console.log("score: " + score);