/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  }
  
  function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  }
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
      return 'Error: Cannot divide by zero.';
    }
    return dividend / divisor;
  }
  
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    let subtotal = Number(document.querySelector('#subtotal').value);
  
    // User input validation is not required in this task, however, input validation is best practice. Consider adding it as a stretch goal by checking that the input value is a valid, numeric amount.
    if (isNaN(subtotal)) {
      alert('Please enter a valid numeric value for the subtotal.');
      return;
    }
  
    // Declare a variable to store the discount amount
    let discount = 0;
  
    // Check IF the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount
    if (document.querySelector('#member').checked) {
      discount = subtotal * 0.2;
    }
  
    // Output the total to the the total span in the format shown with two decimals using a template string
    document.querySelector('#total').innerHTML = `$${(subtotal - discount).toFixed(2)}`;
  });

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray.join(', ');

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0).join(', ');

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
