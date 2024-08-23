function subsetSum(arr, n) {
  // Your code here:
  let box = [0];
  for (let i = 0; i < arr.length; i++) {
    var len = box.length;
    for (let j = 0; j < len; j++) {
      var sum = box[j] + arr[i];
      console.log(sum);
      if (sum === n) return true;
      if (sum < n) box.push(sum);
    }
  }
  return false;
}

module.exports = subsetSum;
