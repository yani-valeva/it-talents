var holidays = [
    [1, 3, 7, 8, 15, 30],
    [1, 3, 4, 6, 8, 28],
    [2, 3, 19, 20, 22],
    [1, 2, 3, 4, 5, 19, 20, 21, 30],
    [3, 5, 6, 7, 8, 9, 10, 11, 28],
    [3, 15, 16, 17, 18, 30],
    [3, 15],
    [3, 15, 16, 20],
    [3, 6, 7, 8, 22, 23, 24],
    [1, 3],
    [1, 3, 4, 18, 20],
    [1, 3, 8, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];

var monthWithMaxHolidays = holidays[0];

for (var row = 1; row < holidays.length; row++) {
    if (holidays[row].length > monthWithMaxHolidays.length) {
        monthWithMaxHolidays = holidays[row];
    }
}

console.log('The month with the most days off is: ' + monthWithMaxHolidays);
var count = 0;
var maxCount = -1;
var mostFrequentDate = 0;

for (var row = 0; row < holidays.length; row++) {
    for (var col = 0; col < holidays[row].length; col++) {
        var currentElement = holidays[row][col];
        for (var holidayRow = row + 1; holidayRow < holidays.length; holidayRow++) {
            for (var holidayCol = 0; holidayCol < holidays[holidayRow].length; holidayCol++) {
                if (currentElement === holidays[holidayRow][holidayCol]) {
                    count++;
                }
            }
        }

        if (maxCount < count) {
            maxCount = count;
            mostFrequentDate = currentElement;
        }
    }
}

console.log('The most frequent date of resting is: ' + mostFrequentDate);

var seriesCount = 1;
var maxSeriesCount = 0;
var searchedRow = -1;
var searchedLastCol = 0;

for (var row = 0; row < holidays.length; row++) {
    for (var col = 0; col < holidays[row].length - 1; col++) {
        if (holidays[row][col] === (holidays[row][col + 1]) - 1) {
            seriesCount++;
        } else {
            if (maxSeriesCount < seriesCount) {
                maxSeriesCount = seriesCount;
                searchedRow = row;
                searchedLastCol = col;
            }

            seriesCount = 1;
        }
    }

    if (maxSeriesCount < seriesCount) {
        maxSeriesCount = seriesCount;
        searchedRow = row;
        searchedLastCol = col;
    }

    seriesCount = 1;
}

var startIndex = searchedLastCol - maxSeriesCount + 1;
var searchedArr = holidays[searchedRow].slice(startIndex, searchedLastCol + 1);
console.log('The longest series of holidays is: ' + searchedArr);
