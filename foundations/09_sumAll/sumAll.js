const sumAll = function (a, b) {
  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    !(typeof a === "number") ||
    !(typeof b === "number")
  ) {
    return "ERROR";
  }

  if (b < a) {
    let c = b;
    b = a;
    a = c;
  }

  let arrOfNumberRange = [];
  for (let i = a; i <= b; i++) {
    arrOfNumberRange.push(i);
  }
  return arrOfNumberRange.reduce((val, sum) => val + sum);
};

// Do not edit below this line
module.exports = sumAll;
