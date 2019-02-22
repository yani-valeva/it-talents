var currentNumber = 0;

for (var row = 1; row <= 10; row++) {
    currentNumber = row;
    for (var col = 1; col <= 10; col++) {
        if (currentNumber > 9) {
            currentNumber = 0;
        }

        if (col === 1) {
            process.stdout.write(currentNumber + '');
        } else {
            process.stdout.write(` ${currentNumber}`);
        }
        
        currentNumber++;
    }

    console.log();
}