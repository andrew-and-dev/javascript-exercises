const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);

  function roundToOneDecimal(value) {
    return Math.round((value + Number.EPSILON) * 10) / 10;
  }

  return roundToOneDecimal(tempInCelsius);
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempToFahrenheit = tempInCelsius * (9 / 5) + 32;

  function roundToOneDecimal(value) {
    return Math.round((value + Number.EPSILON) * 10) / 10;
  }

  return roundToOneDecimal(tempToFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
