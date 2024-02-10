const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  final_sum = 0;
	array.forEach((value) => add(final_sum, value));
};

const multiply = function(x, y) {
  return x * y;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
