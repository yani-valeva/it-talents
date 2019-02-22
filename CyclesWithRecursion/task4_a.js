// let arr = [3, 7, 7, 3];
// let arr = [4];
// let arr = [1, 55, 1];
// let arr = [6, 27, -1, 5, 7, 7, 5, -1, 27, 6];
// let arr = [3, 7, 7];
let arr = [];

function isArrayMirrored(arr) {
    if (arr.length === 0) {
        return true;
    }

    if (arr[0] === arr[arr.length - 1]) {
        arr.pop();
        arr.shift();
        return true && isArrayMirrored(arr);
    } else {
        arr.pop();
        arr.shift();
        return false && isArrayMirrored(arr);
    }
}

isMirrored = isArrayMirrored(arr);
console.log(isMirrored);
