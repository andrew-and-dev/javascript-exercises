const removeFromArray = function (arr, ...arguments) {
  return arr.map((item, index) => {
    for (argument of arguments) {
      if (item === argument) {
        arr.splice(index, 1);
      }
    }
  });
};

// Do not edit below this line
module.exports = removeFromArray;
