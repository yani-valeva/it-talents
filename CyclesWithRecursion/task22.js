function printNumbers(num, count) {
    if (count > 10) {
        return;
    }

    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
        process.stdout.write(`${count}:${num} `);
        count++;
    }

    printNumbers(num + 1, count);
}

let num = 1;
let count = 1;
printNumbers(num + 1, count);


