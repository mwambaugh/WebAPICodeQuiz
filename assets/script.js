/*
timer
timer starts with start button (CLICK)
Question -> submit answer (CLICK)-> if true = time same ->if false = time subtract
when time === 0 means 'out of time submit your initals score' prompt 
submit initials (CLICK)
initals and high score saved into high scores page (push to scores array...in numerical order) 
high scores link 
high scores page*/


//DOM hooks:create variables for the elements that will receive input, that will display feedback
var theButton = document.querySelector([.button]);
var theQuiz = document.querySelector([]);
var questionPrint = document.querySelector([]);
var optionA = document.querySelector([]);
var optionB = document.querySelector([]);
var optionC = document.querySelector([]);
var optionD= document.querySelector([]);

var resetQuiz = ();
var showConfirm = ();

function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Are you sure you want to reset the quiz and start from the beginning?"))
      return false;
  document.location = document.location;
}


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

var Function theQuiz = {;

}


/*
 6. Refactor
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/
return 