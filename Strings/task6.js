var sentence = 'супер яката задача';
var words = sentence.split(' ');

for (var index = 0; index < words.length; index++) {
    var currentWord = words[index];
    words[index] = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
}

console.log(words.join(' '));