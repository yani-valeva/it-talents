var number = 5;
var stars = 5;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < stars; col++) {
        process.stdout.write('*');
    }

    stars--;
    console.log();
}