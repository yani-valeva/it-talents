var number = 5;
var leftSpaces = number - 1;
var rightSpaces = 0;

for (var row = 0; row < number; row++) {
    console.log(' '.repeat(leftSpaces) + '*'.repeat(number) + ' '.repeat(rightSpaces));
    leftSpaces--;
    rightSpaces++;
}
