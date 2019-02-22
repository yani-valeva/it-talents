var input = 'asd-12sdf45-56asdf100';
var numbers = [];
var currentIndex = 0;
numbers[currentIndex] = '';

for (var index = 0; index < input.length; index++) {
    if (input.charAt(index) === '-') {
        if (numbers[currentIndex] === '') {
            numbers[currentIndex] += '-';
            continue;
        } else {
            numbers[++currentIndex] = '-';
            continue;
        }     
    }

    if (input.charAt(index) >= '0' && input.charAt(index) <= '9') {
        numbers[currentIndex] += input.charAt(index);
    } else {
        if (numbers[currentIndex] === '-' || numbers[currentIndex] === '') {
            numbers[currentIndex] = '';
        } else {
            numbers[++currentIndex] = '';
        }
    }
}

var sum = 0;

for (var index = 0; index < numbers.length; index++) {
    var currentNumber = Number(numbers[index]);
    sum += currentNumber;
    console.log(currentNumber);
}

console.log('Sum = ' + sum);