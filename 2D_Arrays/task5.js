var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

var rowSum = 0;
var maxRowSum = 0;
var colSum = 0;
var maxColSum = 0;
var rows = matrix.length;
var cols = matrix[0].length;

for (var row = 0; row < rows; row++) {
    rowSum = 0;

    for (var col = 0; col < cols; col++) {
        rowSum += matrix[row][col];
    }

    if (maxRowSum < rowSum) {
        maxRowSum = rowSum;
    }
}

for (var col = 0; col < cols; col++) {
    colSum = 0;

    for (var row = 0; row < rows; row++) {
        colSum += matrix[row][col];
    }

    if (maxColSum < colSum) {
        maxColSum = colSum;
    }
}

console.log('The largest amount in rows is: ' + maxRowSum);
console.log('The largest amount in columns is: ' + maxColSum);

if (maxRowSum > maxColSum) {
    console.log('The maximum row sum is greater than the maximum column sum!');
}

if (maxRowSum < maxColSum) {
    console.log('The maximum row sum is smaller than the maximum column sum!');
}

if (maxRowSum === maxColSum) {
    console.log('The maximum row sum is equal to the maximum column sum!');
}