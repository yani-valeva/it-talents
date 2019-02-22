var number = 5;
var spaces = 0;
var stars = number;

for (var row = 0; row < number; row++) {
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

stars += 2;
spaces -= 4;

for (var row = 0; row < number - 1; row++) {
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