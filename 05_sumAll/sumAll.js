const sumAll = function(number1, number2) {
    let sum = 0;
    
    if(number1 < 0 || number2 < 0 ||
    !Number.isInteger(number1) || !Number.isInteger(number2)) return 'ERROR';
    
    //If the first number is larger, switch the two
    if(number1 > number2){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }
    
    for(let i = number1; i <= number2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
