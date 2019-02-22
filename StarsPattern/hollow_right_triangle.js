var number = 5;

for (var row = 0; row < number; row++) {
    for (var col = 0; col <= row; col++) {
        if (col === 0 || col === row || row === number - 1) {
            process.stdout.write('*');
            continue;
        }
        
        process.stdout.write(' ');
    }

    console.log();
}