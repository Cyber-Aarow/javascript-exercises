const palindromes = function (string) {
    let spaceless_string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return spaceless_string === spaceless_string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
