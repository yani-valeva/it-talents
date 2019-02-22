var number = 13;
var outerSpaces = number - 1;
var innerSpaces = -1;
var colNumber = 2 * number - 1;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < colNumber; col++) {
        if (row === 0) {
            if (col < outerSpaces) {
                process.stdout.write(' ');
            } else {
                if (col === outerSpaces) {
                    process.stdout.write('*');
                } else {
                    process.stdout.write(' ');
                }
            }
        }

        if (row === number - 1) {
            process.stdout.write('*');
        }
        
        if (row !== 0 && row !== number - 1) {
            if (col < outerSpaces) {
                process.stdout.write(' ');
            } else {
                if (col === outerSpaces) {
                    process.stdout.write('*');
                    continue;
                }

                if (col === outerSpaces + innerSpaces + 1) {
                    process.stdout.write('*');
                } else {
                    process.stdout.write(' ');
                }
            }
        }
    }

    process.stdout.write('\n');
    innerSpaces += 2;
    outerSpaces--;
}