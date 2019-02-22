function isPrime(num, divider) {
    if (isNaN(+num) || num < 1 || num % 1 !== 0) {
        console.log('not prime');
        return;
    }

    if (divider > Math.floor(num / 2)) {
        console.log('prime');
        return;
    }

    if (num % divider === 0) {
        console.log('not prime');
        return;
    }

    isPrime(num, divider + 1);
}

isPrime(101, 2);