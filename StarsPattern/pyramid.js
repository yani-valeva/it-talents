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
    stars += 2;
    console.log();
}