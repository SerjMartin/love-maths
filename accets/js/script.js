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

function runGame() {

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