var arr = [10, 3, 5, 8, -66, -3, 7];
var min = 12345679;

function getMinArrElement(arr, min) {
    if (arr.length === 0) {
        return min;
    }

    if (arr[0] < min && arr[0] % 3 === 0) {
        min = arr[0];
    }

    return min < getMinArrElement(arr.slice(1), min) ? min : getMinArrElement(arr.slice(1), min);
}

let result = getMinArrElement(arr, min);
console.log(result);
