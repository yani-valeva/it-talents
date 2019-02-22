var word1 = 'шапка';
var word2 = 'машина';
var indexInSecondWord = -1;
var indexInFirstWord = -1;

for (var index = 0; index < word1.length; index++) {
    indexInSecondWord = word2.indexOf(word1.charAt(index));
    
    if (indexInSecondWord !== -1) {
        indexInFirstWord = index;
        break;
    }
}

if (indexInSecondWord !== -1) {
    var rows = word2.length;
    var cols = word1.length;
    var matrix = new Array(rows);

    for (var row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);

        for (var col = 0; col < cols; col++) {
            matrix[row][col] = " ";
        }
    }

    for (var col = 0; col < cols; col++) {
        matrix[indexInSecondWord][col] = word1.charAt(col);
    }

    for (var row = 0; row < rows; row++) {
        matrix[row][indexInFirstWord] = word2.charAt(row);
    }

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            process.stdout.write(matrix[row][col] + "");
        }

        console.log();
    }
} else {
    console.log('The two strings do not have a same symbol.');
}

