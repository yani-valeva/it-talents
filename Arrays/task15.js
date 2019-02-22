var arr = [-7.13, 0.2, 4.9, 5.1, 6.34, 1.12, -7.13];
var numbers = new Array(3);

for (var index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
        arr[index] *= -1;
    }
}

for (var count = 0; count < 3; count++) {
    var max = arr[0];
    var currentIndex = 0;

    for (var index = 1; index < arr.length; index++) {
        var hasNotElement = (numbers[0] !== arr[index]) && (numbers[1] !== arr[index]) && (numbers[2] !== arr[index]);
        if (arr[index] > max && hasNotElement) {
            max = arr[index];
            currentIndex = index;
        }
    }

    numbers[count] = max;
    arr.splice(currentIndex, 1);
}
var result = '';

for (var index = numbers.length - 1; index >= 0; index--) {
    result += index === numbers.length - 1 ? numbers[index] : '; ' + numbers[index];
}

console.log(result);