// TASK 1 ============================================================================================================================================
const a = 6;
const b = 10;
let result;

result = a + b;
console.log(result);

result = -a;
console.log(result);

result = a * b;
console.log(result);

result = a / b;
console.log(result);

result = b % a;
console.log(result);

//TASK 2 ============================================================================================================================================
const day = 02;
const month = 10;
const year = 2017;

const date = day + "/" + month + "/" + year;
console.log(date);

//TASK 3 ============================================================================================================================================
const message = prompt("Enter any message:", "Hello World");

let inLowerCase = message.toUpperCase();
console.log(checkCase(inLowerCase));
let inUpperCase = message.toLowerCase();
console.log(checkCase(inUpperCase));


//============= Функция для проверки кода ================= //
function checkCase(str) {
    if (str && str === str.toLowerCase()) {
      return "success: in all lowercase";
    } else if (str && str === str.toUpperCase()) {
      return "success: in all uppercase";
    }
    return "error: not in all lowercase or uppercase";
  }
  //============= end Функция для проверки кода ============== //

//TASK 4 ============================================================================================================================================
const name = 'Mango';
const typingSpeed = 50;

const message1 = name + " typing with speed of: " + typingSpeed + " signs in a minute";

console.log(message1);

//TASK 5 ============================================================================================================================================
const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt(padding, 10) + parseInt(border, 10) + parseInt(contentWidth, 10);

console.log(totalWidth);

//TASK 6 ============================================================================================================================================
const paddingFloatingPoint = "20.25px";
const borderFloatingPoint = "5.15px";
const contentWidthFloatingPoint = "100.45px";

let totalWidthFloatingPoint = (parseFloat(paddingFloatingPoint) + parseFloat(borderFloatingPoint) + parseFloat(contentWidthFloatingPoint));

console.log(totalWidthFloatingPoint);

// TASK 7 ============================================================================================================================================
const x = 0.1;
const y = 0.2;
const z = 0.3;

const resultF = (x + y + z).toFixed(1);
let summ = (parseFloat(resultF));

console.log(0.6 === summ);