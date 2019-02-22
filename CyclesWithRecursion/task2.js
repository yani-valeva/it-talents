function printNumbers(num) {
    if (isNaN(+num) || num > 50) {
        return;
    }

    console.log(num);
    printNumbers(num + 1);
}

printNumbers(-20);