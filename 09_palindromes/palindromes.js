const palindromes = function (str) {

  let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{\}~ ';
  function removePunctuation(string) {
    return string
            .split('')
            .filter(function(letter) {
              return punctuation.indexOf(letter) === -1;
            })
            .join('');
  }
  str = removePunctuation(str).toLowerCase();
  let reversedStr = str.split('').reverse().join('');
  if (str == reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
