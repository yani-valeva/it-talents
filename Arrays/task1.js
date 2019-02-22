var arr = [10, 3, 5, 8, 6, -3, 7];
var min = 12345679;

for (var index = 0; index < arr.length; index++) {
    if (min > arr[index] && arr[index] % 3 === 0) {
        min = arr[index];
    }
}

if (min !== 12345679) {
    console.log('The smallest number that divides three without remainder is: ' + min);
} else {
    console.log('There is not such a number in the array!');
}
