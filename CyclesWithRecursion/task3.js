function printOddNumbers(num) {
    if (isNaN(+num) || num > 10) {
        return;
    }

    if ((num & 1) !== 0) {
        console.log(num);
    }

    printOddNumbers(num + 1);
}

printOddNumbers(-10);