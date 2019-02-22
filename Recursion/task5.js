function getReversedNum(num) {
    if (num % 1 !== 0 || num <= 0) {
        return '';
    }

    return '' + (num % 10) + getReversedNum(Math.floor(num / 10));
}

let currentNum = 12321;
let result = Number(getReversedNum(currentNum));
console.log(result);
console.log((currentNum === result) ? 'yes' : 'no');