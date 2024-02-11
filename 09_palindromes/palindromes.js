const palindromes = function (string) {
    let reversed_string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    reversed_string = reversed_string.split('').reverse().join('');
    return reversed_string === string;
};

// Do not edit below this line
module.exports = palindromes;
