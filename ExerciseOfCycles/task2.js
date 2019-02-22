for (var i = 0; i <= 100; i++) {
    if ((i <= 50) && ((i & 1) !== 0)) {
        console.log(i);
    } 

    if ((i > 50) && ((i & 1) === 0)) {
        console.log(i);
    }
}