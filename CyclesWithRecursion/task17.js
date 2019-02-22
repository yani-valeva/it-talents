let size = 4;
let sign = '+';

function drawSquare(row, sign, border) {
    if (row < 1) {
        return;
    }

    for (var col = 1; col <= border; col++) {
        if (row === 1 || row === border) {
            process.stdout.write('*');
        } else {
            if (col === 1 || col === border) {
                process.stdout.write('*');
            } else {
                process.stdout.write('+');
            }
        }
    }

    console.log();

    drawSquare(row - 1, sign, border);
}

drawSquare(size, sign, size);
