var number = 3;
var outerSpaces = number - 1;
var innerSpaces = -1;
var colNumber = (2 * number - 1) * 2;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < colNumber; col++) {
        if (row === 0) {
            if (col === outerSpaces || col === 3 * outerSpaces + 1) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }

        if (row === number - 1 && number !== 1) {
            process.stdout.write('*');
        }

        var sideOneOfTriangleTwo = 3 * outerSpaces + innerSpaces + 2;
        var sideTwoOfTriangleTwo = (3 * outerSpaces) +  (2 * innerSpaces) + 3;

        if (row !== 0 && row !== number - 1) {
            if (col === outerSpaces || col === outerSpaces + innerSpaces + 1 || col === sideOneOfTriangleTwo || col === sideTwoOfTriangleTwo) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }
    }

    process.stdout.write('\n');
    innerSpaces += 2;
    outerSpaces--;
}