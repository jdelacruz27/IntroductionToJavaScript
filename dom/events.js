// A/c - Clears all values and screen to 0

//first number
var firstNumber = null;
//Operator
var operator = null;
//Second number
var secondNumber = null;
//Result
var result = null;


var buttons = document.getElementsByClassName('button');
var screen = document.getElementById('screen');


function calculateResult(){
  if (secondNumber !== null) {
    if (operator == "+") {
      result = parseInt(firstNumber) + parseInt(secondNumber);
    } else if(operator == "-"){
      result = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operator == "x") {
      result = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operator == "/") {
      result = parseInt(firstNumber) / parseInt(secondNumber);
    }
    screen.innerHTML = result;
  }
}

function clearScreen(){
  firstNumber = null;
  operator = null;
  secondNumber = null;
  result = null;
  screen.innerHTML = 0;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    screen.innerHTML = buttons[i].innerText;
    if(!firstNumber) {
      firstNumber = buttons[i].innerText;
    }else if(!operator) {
      operator = buttons[i].innerText;
    }else if (!secondNumber) {
      secondNumber =buttons[i].innerText;
    }
  })


  if (buttons[i].innerText == "=") {
    buttons[i].addEventListener('click', calculateResult)
  }

  if (buttons[i].innerText == "A/C"){
    buttons[i].addEventListener('click', clearScreen)
  }
}
