function printNumbers(num) {
    if (isNaN(+num) || num > 100) {
        return;
    }

    console.log(num);
    printNumbers(num + 1);
}

printNumbers(1);