//only for uppercase and lowercase letters:
var word = 'Hello';
var newText = '';
var smallACode = 'a'.charCodeAt(0);
var smallZCode = 'z'.charCodeAt(0);
var bigACode = 'A'.charCodeAt(0);
var bigZCode = 'Z'.charCodeAt(0);

for (var index = 0; index < word.length; index++) {
    var currentCode = word.charCodeAt(index)
    if (currentCode >= smallACode && currentCode <= smallZCode) {
        currentCode += 5
        if (currentCode > smallZCode) {
            currentCode = smallACode + (currentCode - smallZCode) - 1;
        }

        newText += String.fromCharCode(currentCode);
        continue;
    }

    if (currentCode >= bigACode && currentCode <= bigZCode) {
        currentCode += 5;
        if (currentCode > bigZCode) {
            currentCode = bigACode + (currentCode - bigZCode) - 1;
        }

        newText += String.fromCharCode(currentCode);
    }  
}

console.log(newText);