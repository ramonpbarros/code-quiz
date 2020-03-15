var score = 25;

var cardQuestion = document.querySelector(".card-title");
var answerCheck = document.querySelector(".card-footer");
var card = document.querySelector(".testCard");

var buttonOne = document.getElementById("button-index-0");
var buttonTwo = document.getElementById("button-index-1");
var buttonThree = document.getElementById("button-index-2");
var buttonFour = document.getElementById("button-index-3");
var buttonSubmit = document.getElementById("btnSubmit");
var buttonClearHighscore = document.getElementById("buttonClear");
var buttonHighscore = document.getElementById("highscoreBtn");

var timerElement = document.getElementById("timerText");
var resultText = document.getElementById("cardResult");
var resultForm = document.getElementById("form");
var navBar = document.getElementById("navBar");

var highscoreInitials = document.getElementById("inputInitials");
var highscoreList = document.querySelector(".list");
var highscoreBtn = document.getElementById("highscoreButtons");
var highscoreHeader = document.getElementById("highscoreListHeader");

highscoreHeader.style.display = "none";
highscoreBtn.style.display = "none";
highscoreList.style.display = "none";
buttonSubmit.style.display = "none";
answerCheck.style.display = "none";
resultForm.style.display = "none";

var initialArray = [];
var li;

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
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonOne.textContent === "curly brackets") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        thirdCard();
    } else if (buttonOne.textContent === "numbers and strings") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        fourthCard();
    } else if (buttonOne.textContent === "commas") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        fifthCard();
    } else {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        sixthCard();
    }
});

buttonTwo.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonTwo.textContent === "booleans") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonTwo.textContent === "quotes") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        thirdCard();
    } else if (buttonTwo.textContent === "other arrays") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        fourthCard();
    } else if (buttonTwo.textContent === "curly brackets") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        fifthCard();
    } else {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        sixthCard();
    }
});

buttonThree.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonThree.textContent === "alerts") {
        score += 20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.display = "contents";
        secondCard();
    } else if (buttonThree.textContent === "parentheses") {
        score += 20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonThree.textContent === "booleans") {
        score -= 5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.visibility = "visible";
        fourthCard();
    } else if (buttonThree.textContent === "quotes") {
        score += 20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.display = "contents";
        fifthCard();
    } else if (buttonThree.textContent === "for loops") {
        score -= 5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.display = "contents";
        sixthCard();
    }
});

buttonFour.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonFour.textContent === "numbers") {
        score -= 5;
        answerCheck.style.display = "contents";
        answerCheck.textContent = "Wrong!"
        secondCard();
    } else if (buttonFour.textContent === "square brackets") {
        score -= 5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonFour.textContent === "all of the above") {
        score += 20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.display = "contents";
        fourthCard();
    } else if (buttonFour.textContent === "parentheses") {
        score -= 5;
        answerCheck.textContent = "Wrong!"
        answerCheck.style.display = "contents";
        fifthCard();
    } else if (buttonFour.textContent === "console log") {
        score += 20;
        answerCheck.textContent = "Correct!"
        answerCheck.style.display = "contents";
        sixthCard();
    }
});

buttonHighscore.addEventListener("click", function() {
    alert("HIGHSCORE --> " + initialArray.join(" , "));
})

buttonSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    var initialsText = highscoreInitials.value.trim();
    // localStorage.setItem("highscoreInitials".JSON.stringify(highscoreInitials.value));
    // e.stopImmediatePropagation();
    localStorage.setItem("initialsText", JSON.stringify(initialsText));
    var test = JSON.parse(localStorage.getItem("initialsText"));

    var totalScore = JSON.parse(localStorage.getItem("score"));

    initialArray.push(test + ": " + totalScore + " points");
    console.log(initialArray);

    if (initialsText === "") {
        alert("Please enter your initials!");
        return;
    }
    if (highscoreInitials !== null) {
        storeHighscore();
        highscoreCard();
    }

});

buttonClearHighscore.addEventListener("click", function (e) {
    e.preventDefault
    localStorage.clear();

    var element = event.target;
    if (element.matches("button") === true) {

        var list = document.getElementById("myList");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

    }

});

function init() {
    var storeHighscore = JSON.parse(localStorage.getItem("initialArray"));

    if (storeHighscore !== null) {
        initialArray = storeHighscore;
    }
}

init();

function storeHighscore() {
    localStorage.setItem("initialArray", JSON.stringify(initialArray));
}

function highscoreCard() {
    card.style.display = "none"
    highscoreHeader.style.display = "contents";
    highscoreList.style.display = "contents";
    highscoreBtn.style.display = "contents";

    for (var i = 0; i < initialArray.length; i++) {
        var listItem = initialArray[i];

        li = document.createElement("li");
        li.textContent = listItem;
        highscoreList.appendChild(li);
    }
}

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
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";
    buttonFour.style.display = "none";
    answerCheck.style.display = "none";
    resultText.innerHTML = "Your final score is " + score + ".";
    resultForm.style.display = "contents"
    timerElement.innerHTML = "Time: 0";
    buttonSubmit.style.display = "contents"
    navBar.style.visibility = "hidden";

    localStorage.setItem("score", JSON.stringify(score));
};

(function () {
    var timeLeft = 75;
    function startTimer() {

        var timer = setInterval(function () {
            timeLeft--;
            timerElement.innerHTML = "Time: " + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.innerHTML = "Time: ";
                sixthCard();
            }
        }, 1000);
    }
    buttonOne.addEventListener('click', function () {
        if (answerCheck.textContent === "Wrong!") {
            timeLeft -= 10;
            timerElement.innerHTML = "Time: " + timeLeft;
        }
    });
    buttonTwo.addEventListener('click', function () {
        if (answerCheck.textContent === "Wrong!") {
            timeLeft -= 10;
            timerElement.innerHTML = "Time: " + timeLeft;
        }
    });
    buttonThree.addEventListener('click', function () {
        if (answerCheck.textContent === "Wrong!") {
            timeLeft -= 10;
            timerElement.innerHTML = "Time: " + timeLeft;
        }
    });
    buttonFour.addEventListener('click', function () {
        if (answerCheck.textContent === "Wrong!") {
            timeLeft -= 10;
            timerElement.innerHTML = "Time: " + timeLeft;
        }
    });
    startTimer();
})();