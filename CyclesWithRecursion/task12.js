function printNumbers(num) {
    if (num > 999) {
        return;
    }

    let firstDigit = Math.floor(num / 100) % 10;
    let secondDigit = Math.floor(num / 10) % 10;
    let thirdDigit = num % 10;

    if ((firstDigit !== secondDigit) && (firstDigit !== thirdDigit) && (secondDigit !== thirdDigit)) {
        console.log(num);
    }

    printNumbers(num + 1);
}

printNumbers(100);