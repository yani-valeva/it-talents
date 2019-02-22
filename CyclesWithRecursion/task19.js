function printSeriesOfNumbers(num) {
    if (num === 1) {
        return;
    }

    if ((num & 1) === 0) {
        num = 0.5 * num;
        process.stdout.write(num + ' ');
    } else {
        num = (3 * num) + 1;
        process.stdout.write(num + ' ');
    }

    printSeriesOfNumbers(num);
}

let num = 11;
printSeriesOfNumbers(num);