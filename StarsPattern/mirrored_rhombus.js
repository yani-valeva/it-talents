var number = 5;
var spaces = 0;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < number; star++) {
        process.stdout.write('*');
    }

    spaces++;
    console.log();
}