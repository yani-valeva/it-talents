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

for (var row = 0; row < matrixLength; row++) {
    var currentSum = 0;
    arr.length = 0;

    for (var col = 0; col < matrix[row].length; col++) {
        if ((row + col) % 2 === 0) {
            arr.push(matrix[row][col]);
            currentSum += matrix[row][col];
        }
    }

    totalSum += currentSum;
    console.log(arr.join(', ') + ' the sum of the elements is: ' + currentSum);
}

console.log('Total sum of the elements is: ' + totalSum);