function DecimalToBynary(num, base) {
  // Your code here: O(log<base>(num))
  var result = [];
  while (num > 0) {
    result.unshift(toSymbol(rest));
    num = Math.floor(num / base);
  }
  return result;
}

function toSymbol(num) {
  var dicc = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  return num <= 9 ? num : dicc[num];
}
/**
9 % 2 => 1 -- 9 / 2 = 4
4 % 2 => 0 -- 4 / 2 = 0
2 % 2 => 0 -- 2 / 2 = 1
1 % 2 => 0 -- 1 / 2 = 0
 */

module.exports = DecimalToBynary;
