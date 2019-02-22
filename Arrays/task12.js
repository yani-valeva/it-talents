var arr = [1, 2, 3, 4, 5, 6, 7];
//change by variable:
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
// change by sum:
arr[2] += arr[3];
arr[3] = arr[2] - arr[3];
arr[2] -= arr[3];
//change by multiplication:
arr[4] *= arr[5];
arr[5] = arr[4] / arr[5];
arr[4] /= arr[5];

console.log(arr);

