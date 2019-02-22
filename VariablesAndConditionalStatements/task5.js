var number1 = 1300;
var number2 = 1300;
var number3 = 200;
var max = Math.max(number1, number2, number3);
var min = Math.min(number1, number2, number3);
var middle = 0;
var isFound = false;

if (!isFound && ((number1 === max && number2 === min) || (number2 === max && number1 === min))) {
    middle = number3;
    isFound = true;
}

if (!isFound && ((number1 === max && number3 === min) || (number3 === max && number1 === min))) {
    middle = number2;
    isFound = true;
}

if (!isFound && ((number2 === max && number3 === min) || (number3 === max && number2 === min))) {
    middle = number1;
}

console.log(max, middle, min);

