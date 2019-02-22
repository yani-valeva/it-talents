function printNFactorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * printNFactorial(num - 1);
}

let factorial = printNFactorial(5);
console.log(factorial);