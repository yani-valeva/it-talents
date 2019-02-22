let number = 5;
let spaces = number - 1;
let stars = 1;

function drawTriangle(row, spaces, stars) {
    if (row >= number) {
        return;
    }

    for (var space = 0; space < spaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    console.log();
    drawTriangle(row + 1, spaces - 1, stars + 2);
}

drawTriangle(0, spaces, stars);