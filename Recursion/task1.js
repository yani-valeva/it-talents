function getFibonacciNumber(count, f0, f1) {
    if (count <= 0) {
        return;
    }

    process.stdout.write(f0 + " ");
    let temp = f0 + f1;
    f0 = f1;
    f1 = temp;

    getFibonacciNumber(count - 1, f0, f1);
}

getFibonacciNumber(8, 1, 1);