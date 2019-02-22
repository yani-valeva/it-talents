var number = 5;
var spaces = number - 1;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star <= row; star++) {
        process.stdout.write('*');
    }

    spaces--;
    console.log();
}