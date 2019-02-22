var number = 5;
var spaces = 0;
var stars = number;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        if (row === 0 || star === 0 || star === stars - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    spaces++;
    stars--;
    console.log();
}