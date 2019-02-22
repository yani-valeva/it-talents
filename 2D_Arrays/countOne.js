var matrixRows =  7;
var matrixCols = 7;
var matrix = new Array(matrixRows);

for (var row = 0; row < matrixRows; row++) {
    matrix[row] = new Array(matrixCols);

    for (var col = 0; col < matrixCols; col++) {
        matrix[row][col] = Math.floor(Math.random() * 2);
    }
}

console.log(matrix);

var rowPosition = 3;
var colPosition = 6;
var count = 0;
var hasSmallerCol = ((colPosition - 1) >= 0);
var hasBiggerCol = ((colPosition + 1) < matrixCols);

if (rowPosition >= 0 && rowPosition < matrix.length && colPosition >= 0 && colPosition < matrix[0].length) {
    if (rowPosition - 1 >= 0) {
        count += (matrix[rowPosition - 1][colPosition] === 1) ? 1 : 0;

        if (hasSmallerCol) {
            count += (matrix[rowPosition - 1][colPosition - 1] === 1) ? 1 : 0;
        }

        if (hasBiggerCol) {
            count += (matrix[rowPosition - 1][colPosition + 1] === 1) ? 1 : 0;
        }
    }

    if ((rowPosition + 1) < matrixRows) {
        count += (matrix[rowPosition + 1][colPosition] === 1) ? 1 : 0;

        if (hasSmallerCol) {
            count += (matrix[rowPosition + 1][colPosition - 1] === 1) ? 1 : 0;
        }

        if (hasBiggerCol) {
            count += (matrix[rowPosition + 1][colPosition + 1] === 1) ? 1 : 0;
        }
    }

    if (hasSmallerCol) {
        count += (matrix[rowPosition][colPosition - 1] === 1) ? 1 : 0;
    }

    if (hasBiggerCol) {
        count += (matrix[rowPosition][colPosition + 1] === 1) ? 1 : 0;
    }
}

console.log('Number of the elements around the searched one that have a value - one is: ' + count);