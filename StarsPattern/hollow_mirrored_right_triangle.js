var number = 5;
var spaces = number - 1;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star <= row; star++) {
        if (star === 0 || star === row || row === number - 1) {
            process.stdout.write('*');
            continue;
        }
        
        process.stdout.write(' ');
    }

    spaces--;
    console.log();
}