var number1 = 19;
var number2 = 6;
var temporary = number1;
number1 = number2;
number2 = temporary;

console.log('The new value of number1 is: ' + number1);
console.log('The new value of number2 is: ' + number2);