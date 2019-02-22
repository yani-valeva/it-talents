function getTriangleOfSign(start, end, row) {
    if (row > end) {
        return;
    }

    let count = start;

    for (let col = start; col <= row; col++) {
        process.stdout.write(count + " ");
        count++;  
    }
    
    console.log();
    getTriangleOfSign(start, end, row + 1);
}

function validateInputData(start, end) {
    if (isNaN(+start) || isNaN(+end) || end < start ) {
        console.error('Invali data!');
        return;
    }

    getTriangleOfSign(start, end, start);
}

validateInputData(14, 20);