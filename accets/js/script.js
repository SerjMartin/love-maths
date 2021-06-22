// wait for the DOM to finishloading before running the game
// Get the button elementa and event listeners to them

document.addEventListener("DOMContentLoaded", function() {
   let buttons = document.getElementsByTagName("button");
   // when this button is click then event from inside from this button will run
   for (let button of buttons) {
        button.addEventListener("click", function() {
            //check the value for attribute with the name data-type
            // (this) using for the specific button, in this case is submit button
         if (this.getAttribute("data-type") === "submit") {
             alert("You clicked Submit!");
         } else {
             let gameType = this.getAttribute("data-type"); // (this) mean the button what will be click with atribute data-type
             alert(`You clicked ${gameType}`); // this tells the user what button has been clicked
         }
        })
   }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    // creates two random numbers betwen 1 and 25
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function dislayMultiplyQuestion() {

}