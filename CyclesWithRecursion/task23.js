function printMultiplicationTable(multiplier1) {
    if (multiplier1 > 9) {
        return;
    }

    for (let multiplier2 = multiplier1; multiplier2 <= 9; multiplier2++) {
        process.stdout.write(`${multiplier1}*${multiplier2}; `);
    }

    console.log();
    printMultiplicationTable(multiplier1 + 1);
}

let num = 1;
printMultiplicationTable(num);