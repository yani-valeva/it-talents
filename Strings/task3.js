var word1 = 'хипопотам';
var word2 = 'хипопотук';

if (word1.length === word2.length) {
    console.log('Both string have same length!');

    for (var index = 0; index < word1.length; index++) {
        var char1 = word1.charAt(index);
        var char2 = word2.charAt(index);

        if (char1 !== char2) {
            console.log(`${index + 1} ${char1}-${char2}`);
        }
    }
} else {
    console.log('Both strings have a different length!');
}