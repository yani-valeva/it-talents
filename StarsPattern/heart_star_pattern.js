var number = 9;
var cols = (number * 4) - 1;
var stars = number;
var outerSpaces = (cols - (3 * number)) / 2;
var innerSpaces =  number;

while (innerSpaces >= 1) {
    for (var outSp = 0; outSp < outerSpaces; outSp++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    for (var inSp = 0; inSp < innerSpaces; inSp++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    outerSpaces--;
    innerSpaces -= 2;
    stars += 2;
    console.log();
}

outerSpaces++;
stars -= 2;
cols = 2 * stars;
cols += ((number & 1) === 0) ? 4 : 1;
console.log(' '.repeat(outerSpaces) + '*'.repeat(cols));
stars = cols - 2;
outerSpaces = 1;

while (stars >= 1) {
    for (var space = 0; space < outerSpaces; space++) {
        process.stdout.write(' ');
    }

    for (var star = 0; star < stars; star++) {
        process.stdout.write('*');
    }

    outerSpaces++;
    stars -= 2;
    console.log();
}