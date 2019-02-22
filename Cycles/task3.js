// Option 1:
// for (var i = -10; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// //Option 2:
for (var i = -10; i <= 10; i++) {
    if ((i & 1) !== 0) {
        console.log(i);
    }
}