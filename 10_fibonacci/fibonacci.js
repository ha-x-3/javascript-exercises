const fibonacci = function(n) {
    if(n < 0) {
      return "OOPS";
    } else if (n === 0) {
      return 0;
    }

    let firstPrev = 1;
    let seceondPrev = 0;

    for (let i = 2; i <= n; i++) {
      let current = firstPrev + seceondPrev;
      seceondPrev = firstPrev;
      firstPrev = current;
    }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
