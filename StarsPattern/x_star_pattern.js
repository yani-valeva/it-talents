var number = 5;
var spaces = 0;
var cols = (2 * number)  - 1
var stars = ((number - 1) * 2) + 1;

for (var row = 0; row < number; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        if (star === 0 || star === stars - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    spaces++;
    stars -= 2;
    console.log();
}

spaces -= 2;
stars += 4;
//todo

for (var row = 0; row < number - 1; row++) {
    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        if (star === 0 || star === stars - 1) {
            process.stdout.write('*');
            continue;
        }

        process.stdout.write(' ');
    }

    spaces--;
    stars += 2;
    console.log();
}

