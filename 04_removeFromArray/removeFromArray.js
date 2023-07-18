// Using Rest Operator
const removeFromArray = function(...args) {
  //the first item in our list of args is the array - pull it out
  const array = args[0];
  //create new empty array
  const newArray = [];
  //use forEach to go through the array
  array.forEach((item) => {
    //push every element in new array UNLESS it is included in the function arguements
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  //return new array
  return newArray;
};

/* Additional Solutions VVVV*****************

const removeFromArray = function(arr) {
  //Construct an array of arguments
  let badValues = Array.prototype.slice.call(arguments);
  //Get rid of the first "good" array element
  badValues.shift();
  //Make "bad" values false and thus filter them
  return arr.filter(function(x) {
    return badValues.indexOf(x) == -1;
  });
}

More advanced Method:
var removeFromArray = function(...args) {
  const array = args[0];
  return array.filter(val => !args.includes(val))
}

*/

// Do not edit below this line
module.exports = removeFromArray;
