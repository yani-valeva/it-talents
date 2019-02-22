var number = 5;
var stars = 5;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < stars; col++) {
        if (row === 0 || col === 0 || col === stars - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    stars--;
    console.log();
}