const removeFromArray = function(array, value1, ...others) {
    let index = array.indexOf(value1);
    if(index != -1){
        array.splice(index, 1);
    }
    for(let val of others){
        index = array.indexOf(val);
        if(index != -1){
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
