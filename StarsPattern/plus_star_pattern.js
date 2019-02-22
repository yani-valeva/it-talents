var number = 7;

for (var row = 0; row < number - 1; row++) {
    for (var col = 0; col < number; col++) {
        if (col !== number - 1) {
            process.stdout.write(' ');
        } else {
            process.stdout.write('+');
        }
    }

    console.log();
}

console.log('+'.repeat((2 * number) - 1));

for (var row = 0; row < number - 1; row++) {
    for (var col = 0; col < number; col++) {
        if (col !== number - 1) {
            process.stdout.write(' ');
        } else {
            process.stdout.write('+');
        }
    }

    console.log();
}