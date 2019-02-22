var arr1 = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
var arr2 = [];

for (var index = 0; index < arr1.length; index++) {
    if (arr1[index] >= -2.99 && arr1[index] <= 2.99) {
        arr2.push(arr1[index]);
    }
}

console.log(arr2.join('; '));