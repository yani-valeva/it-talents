var matrix = [
    [1, 2, 10, 15, 17],
    [3, 6, 8, 11, 22],
    [34, 44, 56, 66, 100],
    [1, 34, 55, 18, 2]
];

var sum = 0;
var rows = matrix.length;
var count = 0;

for (var row = 0; row < rows; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
        sum += matrix[row][col];
        count++;
    }
}

var average = sum / count;
console.log('The sum of all matrix\'s elements is: '+ sum);
console.log('The average of all matrix\'s elements is: ' + average.toFixed(2));