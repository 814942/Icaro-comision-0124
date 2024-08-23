function SumArray(arr, n) {
  // Your code here:
  let x = 0;
  let j = arr.length - 1;
  while (x !== j) {
    if (arr[x] + arr[j] === n) return true;
    if (arr[x] + arr[j] > n) {
      j--;
    } else {
      x++;
    }
  }
  return false;
}

module.exports = SumArray;
