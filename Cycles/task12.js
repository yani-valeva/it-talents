var firstDigit = 0;
var secondDigit = 0;
var thirdDigit = 0;

for (var i = 100; i <= 999; i++) {
    firstDigit = Math.floor(i / 100) % 10;
    secondDigit = Math.floor(i / 10) % 10;
    thirdDigit = i % 10;

    if ((firstDigit !== secondDigit) && (firstDigit !== thirdDigit) && (secondDigit !== thirdDigit)) {
        console.log(i);
    }
}
