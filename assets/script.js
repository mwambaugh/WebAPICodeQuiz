
//DOM hooks:create variables for the elements that will receive input, that will display feedback
var scoreEl = document.querySelector(".scoreboard_score");
// need to update the timer
var timerEl = document.querySelector(".game_timer");
//need to update/change the game control buttons 
var controlsEl = document.querySelector(".game_controls");
var startQuizButtonEl = document.querySelector(".startQuiz")
//need to update the question results but this might be built into the questions bit. 
var incorrectEl = document.querySelector("#incorrect");
var correctEl = document.querySelector("#correct");
var gameDisEl = document.querySelector(".game_display");
var quizResultsEl = document.querySelector(".game_results");
var submitAnswerButtonEl = document.querySelector(".submitAnswer");


//State variables: What objects do I have to keep track of? 
var correctAnswers = 0;
var incorrectAnswers = 0;
var nameEntered = "Marta";
var highScore = 0; 
var timer = null;
var timeLeft = 0;
var questionIndex; 
var userQuestionAnswer = [ ]

var gameDuration = 200; 
var kStorageKey = "challenge-4-key"

//Event: Page Load
function init() {
console.log("game loading...");
}

//Retrieve data from Local Storage
var scores = JSON.parse(localStorage.getItem(kStorageKey));

//event for click start quiz 
function handleClickStart(ev){
  console.log ("game started!");
  console.log(ev.target);

  if(!timer){}
  //set time left 
  timeLeft = gameDuration
  timer = setInterval(handleTimerTick, 1000);
  
  //set the current questions
  //I don't think i need this? 
  questionIndex = Math.floor(Math.random()* quizQuestions.length);

  //choose answer option from multiple choice 
    //I don't think i need this? 

  //hide the start button 
  hideElement(controlsEl);

  //hide game results 
  hideElement(quizResultsEl);
  
  //show timer 
  showElement(timerEl);
  
  //show gameboard 
  showElement(scoreEl);

}
startQuizButtonEl.addEventListener("click", handleClickStart);

//Event: timer tick

function handleTimerTick(ev) {
  console.log("timer ticked!");
  timer--;

  timerEl.textContent = timeLeft;
  if(timeLeft===0){
    handleQuizEnds();
  }
}

//Event: Submit answer 
function handleSubmitAnswer(ev){
  console.log("quiz answer submitted:");
  console.log(ev.target);
};

document.addEventListener("click", handleSubmitAnswer);
//Event: Go back 
function handleGoBack(){};

//Event: end quiz
function handleQuizEnds(ev){
  console.log("quiz has ended");
};
document.addEventListener("click", handleQuizEnds);

//function to hide the start button
function hideElement (el){
  el.classList.add("hide");
};

function showElement (el){
  el.classList.remove("hide");
};

function handleQuizEnds(){}

function displayQuestion (questionIndex){
 quizQuestions((question) = question.options).createElements()
 quizQuestions[questionsIndex]
 console.log(quizQuestions[questionIndex])
}; 

var quizQuestions=[
{
Question: "Who is known as the father of computers?",
options: {
AnswerA: "Charles Babbage",
AnswerB: "Thomas Edison", 
AnswerC: "Alan Turning", 
AnswerD: "Ada Lovelace"},
correct: "Charles Babbage"
},

{
  Question: "What was the first computer to use color?", 
options: {
AnswerA:"Apple 1", 
AnswerB: "Apple 1.5", 
AnswerC: "IBM 650",
AnswerD: "ipod shuffle",
},
correct:"Apple 1"
},

{Question: "What was the first mass produced computer?",
options: {
  AnswerA:"IBM 650",
  AnswerB:"Apple Macbook",
  AnswerC:"Lonovo 150",
  AnswerD:"IBM 550 ",
},
correct:"IBM 650"
},

{Question: "How many generations of computers are there? ",
options: {
  AnswerA:"200",
  AnswerB:"3",
  AnswerC:"5",
  AnswerD:"10",
},
correct:"5"
},

{Question: "How many langauges of coding exist? ",
options: {
  AnswerA:"365",
  AnswerB:"400",
  AnswerC:"500",
  AnswerD:"700",
},
correct:"700"
}]

init();