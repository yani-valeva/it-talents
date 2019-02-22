var number = 6;

for (var row = 0; row < number; row++) {
    for (var col = 0; col < number; col++) {
        if (row === 0 || row === number - 1) {
            if (col === 0 || col === number - 1) {
                process.stdout.write(' ');
            } else {
                process.stdout.write('*');
            }
        } else {
            if (col === 0 || col === number - 1) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }     
    }

    console.log();
}

for (var row = 0; row < number - 1; row++) {
    for (var col = 0; col < number; col++) {
        if (row === number - 2) {
            if (col === 0 || col === number - 1) {
                process.stdout.write(' ');
            } else {
                process.stdout.write('*');
            }
        } else {
            if (col === 0 || col === number - 1) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }
    }
   
    console.log();
}
