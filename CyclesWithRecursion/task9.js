let num1 = 1;
let num2 = 107;

function printNumbers(num1, sum) {
    if (num1 > num2 || sum > 200) {
        return '';
    }

    if (num1 % 3 === 0) {
        return ('skip ' + num1 + ', ') + printNumbers(num1 + 1, sum); 
    } else {
        sum += num1 * num1;
        return (num1 * num1 + ', ') + printNumbers(num1 + 1, sum);
    }
}

let result = printNumbers(num1, 0);
console.log(result.substring(0, result.length - 2));