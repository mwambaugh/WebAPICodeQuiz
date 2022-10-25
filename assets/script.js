//DOM hooks:create variables for the elements that will receive input, that will display feedback
var scoreEl = document.querySelector(".scoreboard_score");
// need to update the timer
var timerEl = document.querySelector(".quiz_timer");
//need to update/change the game control buttons
var controlsEl = document.querySelector(".quiz_controls");
var startQuizButtonEl = document.querySelector(".startQuiz");
//need to update the question results but this might be built into the questions bit.
var incorrectEl = document.querySelector("#incorrect");
var correctEl = document.querySelector("#correct");
var gameDisEl = document.querySelector(".quiz_display");
var quizResultsEl = document.querySelector(".quiz_results");
var submitAnswerButtonEl = document.querySelector(".submitAnswer");

//State variables: What objects do I have to keep track of?
var correctAnswers = 0;
var incorrectAnswers = 0;
var nameEntered = "Marta";
var highScore = 0;
var timer = null;
var timeLeft = 0;
var questionIndex = 0;
var userQuestionAnswer = [];

var gameDuration = 200;
var kStorageKey = "challenge-4-key";

//Event: Page Load
function init() {
  console.log("Quiz loading...");
}

//Retrieve data from Local Storage
var scores = JSON.parse(localStorage.getItem(kStorageKey));

//event for click start quiz
function handleClickStart(ev) {
  console.log("Quiz started!");
  console.log(ev.target);

  if (!timer) {
  }
  //set time left
  timeLeft = gameDuration;
  timer = setInterval(handleTimerTick, 1000);

  timerEl.textContent = timeLeft;

  displayQuestion(questionIndex);

  //hide the start button
  hideElement(controlsEl);

  //hide quiz results
  hideElement(quizResultsEl);

  //show timer
  showElement(timerEl);

  //show quiz
  showElement(scoreEl);
}
startQuizButtonEl.addEventListener("click", handleClickStart);

//Event: timer tick

function handleTimerTick(ev) {
  timer--;
  console.log("timer ticked!", timeLeft);

  timerEl.textContent = timeLeft;
  if (timeLeft === 0) {
    handleQuizEnds();
  }
}

//Event: Submit quiz answer
function handleSubmitAnswer(ev) {
  console.log("quiz answer submitted:");
  console.log(ev.target);
  if (questionIndex + 1 < quizQuestions.length) {
    questionIndex++;
    displayQuestion(questionIndex);
  }
}

gameDisEl.addEventListener("click", handleSubmitAnswer);

//Event: Go back
function handleGoBack() {}

//Event: end quiz
function handleQuizEnds() {
  clearInterval(timer);
  timer = null;

  if (didWin) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }

  localStorage.setItem(kStorageKey, JSON.stringify({ correct, incorrect }));

  displayResult(false);
  updateScoreboard();
  showElement(controlsEl);
}

//function to hide the start button
function hideElement(el) {
  el.classList.add("hide");
  timeLeft;
}

function showElement(el) {
  el.classList.remove("hide");
}

function displayResult(correctAnswers) {
  quizResultsEl.classList.remove("success");
  quizResultsEl.classList.remove("wrong");
  hideElement(timerEl);

  if (correctAnswers) {
    quizResultsEl.textContent = "Answer is correct.";
    quizResultsEl.classList.add("success");
  } else {
    quizResultsEl.textContent = "Answer is incorrect.";
    quizResultsEl.classList.add("wrong");
  }
  showElement(quizResultsEl);
}

function handleQuizEnds(correctAnswers) {
  clearInterval(timer);
  timer = null;
}

function displayQuestion(questionIndex) {
  //  quizQuestions((question) = question.options).createElements();
  gameDisEl.innerHTML = "";
  var questionContainer = document.createElement("div");
  var questionText = document.createElement("h2");
  questionText.textContent = quizQuestions[questionIndex].Question;
  questionContainer.appendChild(questionText);
  gameDisEl.appendChild(questionContainer);

  //can I use the same var to add ul and l
  var optionsContainer = document.createElement("ul");
  questionContainer.appendChild(optionsContainer);
  //create var to take options from data block -
  var currentOptions = quizQuestions[questionIndex].options;
  //in the array of options, we are going to loop through, each time pick up an index item
  for (let i = 0; i < currentOptions.length; i++) {
    var choiceBtn = document.createElement("button");
    //i = 0, set text content
    choiceBtn.textContent = currentOptions[i];
    optionsContainer.appendChild(choiceBtn);
  }
}

//make each answer opt into array
var quizQuestions = [
  {
    Question: "Question 1/5: Who is known as the father of computers?",
    options: [
      "Charles Babbage",
      "Thomas Edison",
      "Alan Turning",
      "Ada Lovelace",
    ],
    correct: "Charles Babbage",
  },

  {
    Question: "Question 2/5: What was the first computer to use color?",
    options: ["Apple 1", "Apple 1.5", "IBM 650", "ipod shuffle"],
    correct: "Apple 1",
  },

  {
    Question: "Quesiton 3/5: What was the first mass produced computer?",
    options: ["IBM 650", "Apple Macbook", "Lonovo 150", "IBM 550"],
    correct: "IBM 550",
  },

  {
    Question: "Question 4/5: How many generations of computers are there?",
    options: ["200", "3", "5", "10"],
    correct: "5",
  },

  {
    Question: "Question 5/5: How many languages of coding exist?",
    options: ["365", "400", "500", "700"],
    correct: "700",
  },
];

init();
