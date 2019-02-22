var input = 'Anna Dosewa Asenowa, Iwo Peew Peew';
var names = input.split(', ');
var sumOfName1 = 0;
var sumOfName2 = 0;

for(var index = 0; index < names[0].length; index++) {
    if (names[0].charAt(index) !== ' ') {
        sumOfName1 += names[0].charCodeAt(index);
    }   
}

for(var index = 0; index < names[1].length; index++) {
    if (names[1].charAt(index) !== ' ') {
        sumOfName2 += names[1].charCodeAt(index);
    }   
}

if (sumOfName1 > sumOfName2) {
    console.log(names[0]);
}

if (sumOfName1 < sumOfName2) {
    console.log(names[1]);
}

if (sumOfName1 === sumOfName2) {
    console.log('The sum of the two names is same!');
    console.log(`The first name is: ${names[0]}. The second name is: ${names[1]}.` );
}