var matrix = [
    [11, 12, 13, 14, 15, 16],
    [21, 22, 23, 24, 25, 26],
    [31, 32, 33, 34, 35, 36],
    [41, 42, 43, 44, 45, 46],
    [51, 52, 53, 54, 55, 56],
    [61, 62, 63, 64, 65, 66]
];

var matrixLength = matrix.length;
var totalSum = 0;
var arr = [];
var elementsCount = (matrix.length * matrix[0].length) - 1;
var currentSum = 0;
var currentRow = 0;

for (var index = 0; index <= elementsCount; index++) {
    var row = Math.floor(index / matrixLength);
    var col = index % matrixLength;
    if (currentRow === row) {
        totalSum += currentSum;
        if (currentRow !== 0) {
            console.log(arr.join(', ') + ' the sum of the elements is: ' + currentSum);
        }

        currentRow++;
        currentSum = 0;
        arr.length = 0;
    }

    if ((row + col) % 2 === 0) {
        arr.push(matrix[row][col]);
        currentSum += matrix[row][col];
    }
}

console.log(arr.join(', ') + ' the sum of the elements is: ' + currentSum);
totalSum += currentSum;
console.log('Total sum of the elements is: ' + totalSum);