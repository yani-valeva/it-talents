var number = 6;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < number; col++) {
        if (row === 0 || row === number - 1 || col === 0 || col === number - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    console.log();
}