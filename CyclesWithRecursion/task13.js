let searchedSum = 26;
const maxValue = 999;

function printNumber(minValue, searchedSum) {
    if (minValue > maxValue) {
        return;
    }
    
    let firstDigit = Math.floor(minValue / 100) % 10;
    let secondDigit = Math.floor(minValue / 10) % 10;
    let thirdDigit = minValue % 10;

    if (firstDigit + secondDigit + thirdDigit === searchedSum) {
        process.stdout.write(minValue + ' ');
    }

    printNumber(minValue + 1, searchedSum);
}

printNumber(100, searchedSum);