var number = 5;
var leftSpaces = number - 1;
var colNumber = (2 * number) - 1;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < leftSpaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < number; star++) {
        if (row === 0 || row === number - 1 || star === 0 || star === number - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    leftSpaces--;
    console.log();
}