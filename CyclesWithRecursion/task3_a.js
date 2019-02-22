let num = 1;
let arr = [];

function printArray(arr, num1, num2) {
    if (!Array.isArray(arr) || isNaN(+num1) || isNaN(+num2) || arr.length >= 10) {
        return arr;
    }

    arr.push(num1);
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;

    return printArray(arr, num1, num2);
}

let result = printArray(arr, num, num);
console.log(result.join(' '));