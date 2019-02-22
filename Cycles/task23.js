var num = 1;
while (num <= 9) {
    for (var i = num; i <= 9; i++) {
        process.stdout.write(`${num}*${i}; `);
    }

    console.log();
    num++;
}