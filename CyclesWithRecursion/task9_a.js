let arr = [2, 3, 7, -5];
function getArrElementsReversed(arr, index) {
    if (index < 0) {
        return '';
    }

    return arr[index] + ' ' + getArrElementsReversed(arr, index - 1);
}

let result = getArrElementsReversed(arr, arr.length - 1);
console.log(result);
