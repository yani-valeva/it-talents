var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
var matrixRows = matrix.length;
var matrixCols = matrix[0].length;
var rotatedMatrix = new Array(matrixCols);
var rotatedRow = -1;
var rotatedCol = -1;

for (var col = 0; col < matrixCols; col++) {
    rotatedMatrix[col] = new Array(matrixRows);
    rotatedRow++;
    
    for (var row = matrixRows - 1; row >= 0; row--) {
        rotatedCol++;
        rotatedMatrix[rotatedRow][rotatedCol] = matrix[row][col];
    }

    rotatedCol = -1;
}

for (var row = 0; row < rotatedMatrix.length; row++) {
    console.log(rotatedMatrix[row].join(','));
}
