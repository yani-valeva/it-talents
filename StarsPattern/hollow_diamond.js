var number = 6;
var stars = number;
var spaces = 0;

for (var row = 0; row < number; row++) {
    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    stars--;
    spaces += 2;
    console.log();
}

stars++;
spaces -= 2;

for (var row = 0; row < number; row++) {
    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    stars++;
    spaces -= 2;
    console.log();
}