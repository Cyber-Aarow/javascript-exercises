const palindromes = function (string) {
    let reversed_string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    reversed_string = reversed_string.split("").reduce((char1, char2) => char2 + char1, '');
    return reversed_string === string;
};

// Do not edit below this line
module.exports = palindromes;
