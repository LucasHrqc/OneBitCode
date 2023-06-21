"use strict";

function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (acc, number) {
    acc += number;
    return acc;
  }, 0);
  var result = sum / numbers.length;
  console.log("\n  M\xE9dia aritm\xE9tica: ".concat(result));
}
function weightAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (acc, entry) {
    acc += entry.value * entry.weight;
    return acc;
  }, 0);
  var weightSum = entries.reduce(function (acc, entry) {
    acc += entry.weight;
    return acc;
  }, 0);
  var result = sum / weightSum;
  console.log("\n  M\xE9dia Ponderada: ".concat(result, "\n  "));
}
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  var average = average(firstMedian, secondMedian);
  console.log("Mediana: ".concat(average));
};
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log("Moda: ".concat(quantities));
};