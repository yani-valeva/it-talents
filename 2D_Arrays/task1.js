var matrix = [
    [48, 72, 13, 14, 15],
    [21, 22, 53, 24, 75],
    [31, 57, 33, 34, 35], 
    [41, 95, 43, 44, 45],
    [59, 52, 53, 54, 55],
    [61, 69, 63, 64, 65]
];

var min = matrix[0][0];
var max = matrix[0][0];
var matrixLength = matrix.length;
var arrLength = matrix[0].length;

for (var row = 0; row < matrixLength; row++) {
    for (var col = 0; col < arrLength; col++) {
        if (matrix[row][col] < min) {
            min = matrix[row][col];
        }

        if (matrix[row][col] > max) {
            max = matrix[row][col];
        }
    }
}

console.log('The smallest number is: ' + min);
console.log('The biggest number is: ' + max);
