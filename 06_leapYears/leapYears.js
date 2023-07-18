const leapYears = function(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else{
    return false;
  }
};

/* Odin Solution VVVV*********

const leapYears = function(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

leapYears(100)
*/

// Do not edit below this line
module.exports = leapYears;
