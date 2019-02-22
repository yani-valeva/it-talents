function getMultiplicationTable(multiplier1, num1) {
    if (multiplier1 > num1) {
        return;
    }

    for (var multiplier2 = 1; multiplier2 <= num2; multiplier2++) {
        console.log(`${multiplier1}*${multiplier2}=${multiplier1 * multiplier2}`);
    }

    getMultiplicationTable(multiplier1 + 1, num1);
}

let num1 = 2;
let num2 = 2;
getMultiplicationTable(1, num1);
