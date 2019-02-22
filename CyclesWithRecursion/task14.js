let number = 77;
function printNum(num) {
    if (num < 10) {
        return;
    }

    if (num % 7 === 0) {
        process.stdout.write(num + ' ');
    }

    printNum(num - 1);
}

printNum(number - 1);