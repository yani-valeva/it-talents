var arr = [ -1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
console.log(arr);

for (var index = 0; index < arr.length; index++) {
    if (arr[index] < -0.231) {
        arr[index] = ((index + 1) * (index + 1)) + 41.25;
        arr[index] = Number(arr[index].toFixed(2));
    } else {
        arr[index] *= (index + 1);
        arr[index] = Number(arr[index].toFixed(2));
    }
}

console.log(arr);
var sum = 0;
var count = 0;

for (var index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
        sum += arr[index];
        count++;
    }
}

var average = sum / count;
console.log(average.toFixed(2));