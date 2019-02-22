var arr1 = [5, 2, 5, 8, 3];
var arr2 = new Array(arr1.length * 2);
arr2 = arr1.slice();

for (var index = arr1.length - 1; index >= 0; index--) {
    arr2.push(arr1[index]);
}

console.log(arr2);

