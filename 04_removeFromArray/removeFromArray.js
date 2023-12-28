const removeFromArray = function(array, value, value2) {
    let index = array.indexOf(value);
    if(index != -1){
        array.splice(index, 1);
    }
    let index2 = array.indexOf(value2);
    if(index2 != -1){
        array.splice(index2, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
