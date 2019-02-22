function getSquareOfNumbers(row) {
    if (row > 10) {
        return;
    }

    let currentNumber = row;
    for (let col = 1; col <= 10; col++) {
        if (currentNumber > 9) {
            currentNumber = 0;
        }

        process.stdout.write(currentNumber + ' ');
        currentNumber++;
    }

    console.log();

    getSquareOfNumbers(row + 1);
}

getSquareOfNumbers(1);