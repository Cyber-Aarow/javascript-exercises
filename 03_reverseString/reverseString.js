const reverseString = function(string) {
    let new_string = '';
    for(let i  = 0; i < string.length(); i++){
        new_string = string.at(i).concat(new_string);
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
