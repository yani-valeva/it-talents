var a1 = 7;
var a2 = 12.3;
var a3 = 50;
var temporary = a1;
a1 = a2;
a2 = a3;
a3 = temporary;

console.log('a1 = ' + a1);
console.log('a2 = ' + a2);
console.log('a3 = ' + a3);