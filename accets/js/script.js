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
             checkAnswer();
         } else {
              let gameType = this.getAttribute("data-type"); // (this) mean the button what will be click with atribute data-type
              runGame(gameType);// call runGame function with parameter 'gameType'
            }
        })
   }
   runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // creates two random numbers betwen 1 and 25
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;

   if (gameType === "addition") {
       displayAdditionQuestion(num1, num2);
   } else if (gameType === "multiply") {
    dislayMultiplyQuestion(num1, num2);
   }else {
       alert(`Unknown game type: ${gameType}`);
       throw `Unknown game type: ${gameType}.Abording`; // 'throw' statemnent will stop the game from running
   }
}

/**
 * Checks the answer against the first elament in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! you got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answer ${userAnswer}. the corect answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus ect)
 * directly from the donm, and return the correct answer.
 */
function calculateCorrectAnswer() {
    // using parseInt to return value in number not in string
   let operand1 = parseInt(document.getElementById('operand1').innerText);
   let operand2 = parseInt(document.getElementById('operand2').innerText);
   let operator = document.getElementById("operator").innerText;
  
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Abording!`;
    }
}

/**
 * Gets the curent score from the Dom and increments it by 1
 */
function incrementScore() {

      let oldScore = parseInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the curent tally of incorect answers from the Dom and increments it by 1
 */
function incrementWrongAnswer() {
     
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
      document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
   document.getElementById('operand1').textContent = operand1;
   document.getElementById('operand2').textContent = operand2;
   document.getElementById('operator').textContent = "+";

}

function displaySubstractQuestion() {

}

function dislayMultiplyQuestion(operand1, operand2) {
    
   document.getElementById('operand1').textContent = operand1;
   document.getElementById('operand2').textContent = operand2;
   document.getElementById('operator').textContent = "x";

}