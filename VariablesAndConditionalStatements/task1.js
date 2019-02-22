var a = 29.5;
var b = 13.2;
var c = 22.1;
var isMiddleNumber = (c > a && c < b) || (c > b && c < a);
var minNumber = Math.min(a, b);
var maxNumber = Math.max(a, b);

if (isMiddleNumber) {
    // console.log(`Number ${c} is between ${minNumber} and ${maxNumber}.`);
    console.log('Number ' + c + ' is between ' + minNumber + ' and ' + maxNumber + '.');
} else {
    console.log(`Number ${c} isn\'t between ${minNumber} and ${maxNumber}.`);
    // console.log('Number ' + c + ' isn\'t between ' + minNumber + ' and ' + maxNumber + '.');
}