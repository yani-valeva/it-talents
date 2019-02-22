let num1 = 25;
let num2 = 249;
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

function printNumsDescending(max) {
    if (max < min) {
        return;
    }

    if (max % 50 === 0) {
        process.stdout.write(max + " ");
    }

    printNumsDescending(max - 1);
}

printNumsDescending(max);
