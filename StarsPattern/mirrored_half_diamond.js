var number = 5;
var spaces = number - 1;
var stars = 1;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    spaces--;
    stars++;
    console.log();
}

stars -= 2;
spaces += 2;

for (var row = 0; row < number - 1; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    spaces++;
    stars--;
    console.log();
}