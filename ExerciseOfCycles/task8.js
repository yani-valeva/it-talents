var number = 5
var colNumber = 2 * number - 1;
var spaces = number - 1;
var stars = 1;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < colNumber; col++) {
        if (col < spaces) {
            process.stdout.write(' ');
        } else {
            if (col >= spaces + stars) {
                process.stdout.write(' ');
            } else {
                process.stdout.write('*');
            }   
        }
    }
    process.stdout.write('\n');
    spaces--;
    stars += 2;
}