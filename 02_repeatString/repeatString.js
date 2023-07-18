const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else if (num === 1) {
    return string;
  } else {
    return string + repeatString(string, num - 1);
  }
};

/* Odin Solution VVVVVVVVVVVVVV**********************

const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

*/

// Do not edit below this line
module.exports = repeatString;
