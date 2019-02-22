//Първо трябва да се тества задача encrypted.html, в която ключът се генерира рандом и да се копира от там матрицата и криптираната дума за да се види дали тук се декриптира коректно :)
var matrix = [
    ["d", "w", "m", "y", "h"],
    ["f", "e", "t", "c", "n"],
    ["p", "s", "j", "q", "a"],
    ["g", "l", "i", "v", "b"],
    ["r", "k", "u", "o", "x"]
];
var encrypted = 'ctksadxc';
var word = '';
var size = 5;

for (var index = 0; index < encrypted.length; index += 2) {
    var charOne = encrypted.charAt(index);
    var charTwo = encrypted.charAt(index + 1);
    var charOneRow = -1;
    var charOneCol = -1;
    var charTwoRow = -1;
    var charTwoCol = -1;
    var findOne = false;
    var findTwo = false;

    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            if (matrix[row][col] === charOne) {
                charOneRow = row;
                charOneCol = col;
                findOne = true;
            }

            if (matrix[row][col] === charTwo) {
                charTwoRow = row;
                charTwoCol = col;
                findTwo = true;
            }

            if (findOne && findTwo) {
                break;
            }
        }
    }

    if ((charOneRow === charTwoRow) && (charOneCol === charTwoCol)) {
        charOneCol = ((charOneCol - 1) < 0) ? size - 1 : charOneCol - 1;
        word += matrix[charOneRow][charOneCol] + matrix[charTwoRow][charOneCol];
        continue;
    }

    if (charOneRow === charTwoRow) {
        charOneCol = ((charOneCol - 1) < 0) ? size - 1 : charOneCol - 1;
        word += matrix[charOneRow][charOneCol];
        charTwoCol = ((charTwoCol - 1) < 0) ? size - 1 : charTwoCol - 1;
        word += matrix[charTwoRow][charTwoCol];
        continue;
    }

    if (charOneCol === charTwoCol) {
        charOneRow = ((charOneRow - 1) < 0) ? size - 1 : charOneRow - 1;
        word += matrix[charOneRow][charOneCol];
        charTwoRow = ((charTwoRow - 1) < 0) ? size - 1 : charTwoRow - 1;
        word += matrix[charTwoRow][charTwoCol];
        continue;
    }

    word += matrix[charOneRow][charTwoCol];
    word += matrix[charTwoRow][charOneCol];
}

console.log(word);