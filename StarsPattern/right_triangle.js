var number = 5;

for (var row = 0; row < number; row++) {
    for (var col = 0; col <= row; col++) {
        process.stdout.write('*');
    }

    console.log();
}