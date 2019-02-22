var text = 'asd fg hjkl hhshshshhs';
var words = text.split(' ');
var maxWordLength = -123444;
var currentWordLength = 0;

for (var index = 0; index < words.length; index++) {
    currentWordLength = words[index].length;

    if (maxWordLength < currentWordLength) {
        maxWordLength = currentWordLength;
    }
}

console.log(`${words.length} words, the longest word is ${maxWordLength} characters long.`);