const reverseString = function(string) {
  return string.split('').reverse().join('');
};

console.log(reverseString("hello"));

/* Alternate Solution VVVVVV******

const reverseString = function(text) {
  const myArray = text.split("");
  let reverseMyArray = myArray.reverse().join("");
  return reverseMyArray;
};

*/

// Do not edit below this line
module.exports = reverseString;
