const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, temp) => sum + temp, 0);
};

const multiply = function(arr) {
  return arr.length
       ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
       : 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	return n===0 ? 1 : n * factorial(n - 1); 
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
