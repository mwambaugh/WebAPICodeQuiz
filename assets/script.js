
// when time === 0 means 'out of time submit your initals score' prompt 
// submit initials (CLICK)
// initals and high score saved into high scores page (push to scores array...in numerical order) 
// high scores link 
// high scores page*/


//DOM hooks:create variables for the elements that will receive input, that will display feedback
//need to update the questions being shown 
var quizQuestionsEl= document.querySelector(".questionAsk");
//need to update the high scores 
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


//State variables: What objects do I have to keep track of? 
var correctAnswers = 0;
var incorrectAnswers = 0;
var nameEntered = "Marta";
var highScore = 0; 
var timer = null;
var timeLeft = 0;
var currentQuestionIndex; 
var userQuestionAnswer = [ ]

var gameDuration = 20; 
var kStorageKey = "challenge-4-key"

//Event: Page Load
function init() {
console.log("game loading...");
}
//retrieve data from persistance
var scores = JSON.parse(localStorage.getItem(kStorageKey));

//update state
// if(scores) {
//   wins = scores.correct;
//   losses= scores.incorrect;
// }

// updateScoreBoard();
// };

//event for click start quiz 
function handleClickStart(ev){
  console.log ("game started!")

  if(!timer){}
  //set time left 
  timeLeft = gameDuration
  timer = setInterval(handleTimerTick, 1000);
  //set the current questions
  currentQuestionIndex = Math.fllor(math.random()* quizQuestions.length);
  //choose answer option from multiple choice 
  //hide the start button 
  hideElement(controlsEl);
  //hide game results 
  hideElement(quizResultsEl);
  //show timer 
  showElement(timerEl);
  //show gameboard 
  showElement(quizQuestionsEl);
  // start timer

  //set the time left  

  //reset the display

  //hide any messages of the correct/ incorrect 

  //show timer when we start a new question 

  //show gameboard 

}
startQuizButtonEl.addEventListener("click", handleClickStart);

//Event: timer tick

function handleTimerTick(ev) {
  console.log("timer ticked!");
  timer--;

  timerEl.textContent = timeLeft;
  if(timeLeft===0){
    handleQuizEnds(false);
  }
}

//Event: Submit answer 
function handleSubmitAnswer(ev){
  console.log("quiz answer submitted:", ev.click);
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

function handleQuizEnds(didWin){}

//Event: show high scores 

//Event: Enter name with high scores 

//refractor - tasks that can be broken into their own functions, outside an event handlers 

// Array of objects for each question and choices, key:values of each question 
var quizQuestionsEl=[
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
},

{Question: "What is my favorite color?",
options: {
  AnswerA:"Blue",
  AnswerB:"Green",
  AnswerC:"Turquoise",
  AnswerD:"Off-Yellow",
},
correct:"Turquoise"
}]


// If quizQuestions[0].options.AnswerA quizQuestions[0].correct then display.document.alert= "Correct!"

// //Place this at the end of the page: 
// init()

/*Declare variables: state: What are the datq that need to be kept track of? 
Global state variables sometimes emerge while working on event handlers (i.e., it becomes clearer what needs to be tracked across the application)
state variables:"State describes the status of the entire program or an individual object. It could be text, a number, a boolean, or another data type.

It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

/*
 4. Declare variables: constants
    - What are the data the application needs that won't change?
    - e.g. Math constants, pre-created content (maybe the questions and answers?)
*/

/*
 5. Identify events
    - Based on the variables created in Step 2, create event handlers

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - Rememember: there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

/*
 6. Refactor - Helper functions
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/

// function updateScoreBoard(){
//   // Update the UI based on state 
//   correctEl.textContent = wins;
//   incorrectEl.textContent = losses;
// } 


// Start the Game
//Place this at the end of the page: 
init();