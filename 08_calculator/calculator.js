const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let summedNums = 0;
	for (let i = 0; i < arr.length; i++) {
    summedNums += arr[i];
  }
  return summedNums;
};

const multiply = function(...arr) {
	let multiplyNums = 1;
	for (let i = 0; i < arr.length; i++) {
    multiplyNums *= arr[i];
  }
  return multiplyNums;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let factorialNum = 1;
  if (n == 0 || n == 1) {
    return factorialNum;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      factorialNum = factorialNum * i;
    }
    return factorialNum;
  }
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
