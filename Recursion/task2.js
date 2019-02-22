function getProductOfNumbers(num1, num2) {
    if (num2 < 1) {
        return 0;
    }

    return num1 + getProductOfNumbers(num1, num2 - 1);
}

function validateInputData(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || number1 % 1 !== 0 || number2 % 1 !== 0 || number1 < 2 || number2 < 2) {
        console.error('Invalid data!');
        return;
    }

    let result = getProductOfNumbers(number1, number2);
    console.log(result);
}

validateInputData(6, 10);