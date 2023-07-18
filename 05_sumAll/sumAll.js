const sumAll = function(a, b) {
  //Test for non-numbers in parameters
  if (typeof a === 'number' && typeof b ==='number') {
    //Create sum variable
    let sum = 0;
    //Loop through given numbers (a < b, not less than 0)
    if (a < b && a > 0 && b > 0) {
      for (let i = a; i <= b; i++) {
        //Sum all numbers
        sum += i;
      }
    //Loop through given numbers (a > b, not less than 0)  
    } else if (a > b && a > 0 && b > 0) {
      for (let i = a; i >= b; i--) {
        sum += i;
      }
    //Return 'Error' when a or b less than 0
    } else if (a < 0 || b < 0) {
      return 'ERROR';
    } 
    //Return sum
    return sum;
  //Return 'Error' for non-number parameters
  } else {
    return 'ERROR';
  }
};

/* Odin Solution VVVVVVV**********

const sumAll = function(min, max) {
  if (!Number.isInteger(min)|| !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max +1; i++){
    sum += i;
  }
  return sum;
};

*/

// Do not edit below this line
module.exports = sumAll;
