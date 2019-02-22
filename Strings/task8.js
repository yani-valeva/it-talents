// var word = 'капак';
var word = 'тенджера';
var isPalindrom = true;
var halfLength = Math.floor(word.length / 2);

for (var index = 0; index < halfLength; index++) {
    if (word.charAt(index) !== word.charAt(word.length - 1 - index)) {
        isPalindrom = false;
        break;
    }
}

console.log(isPalindrom ? 'yes' : 'no');
