const reverseString = function (string) {
  let array = string.split(" ").reverse();
  let reversedString = "";

  for (let i = 0; i < array.length; i++) {
    let arrayForEachItem = [];
    for (let j = 0; j < array[i].length; j++) {
      arrayForEachItem.unshift(array[i][j]);
    }
    let stringOfEachItem = arrayForEachItem.join("");
    if (i === array.length - 1) {
      reversedString += stringOfEachItem;
    } else {
      reversedString += `${stringOfEachItem} `;
    }
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
