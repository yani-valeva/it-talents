var number = 8;

for (var row = 0; row < number; row++) {
    for (var col = 0; col <= row; col++) {
        process.stdout.write('*');
    }

    console.log();
}

for (var row = number - 1; row > 0; row--) {
    for (var col = 0; col < row; col++) {
        process.stdout.write('*');
    }

    console.log();
}