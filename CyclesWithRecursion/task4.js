function printNums(num) {
    if (isNaN(+num) || num < 1) {
        return;
    }

    process.stdout.write(num + ' ');
    printNums(num - 1);
}

printNums(10);