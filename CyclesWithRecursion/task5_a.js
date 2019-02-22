let arr = [];
function getArr(arr, index) {
    if (index >= 10) {
        return arr;
    }

    arr.push(index * 3);

    return getArr(arr, index + 1);
}

let result = getArr(arr, 0);
console.log(result);