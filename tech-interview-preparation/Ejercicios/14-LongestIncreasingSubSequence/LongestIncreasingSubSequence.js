function longestIncreasingSubsequence(nums) {
  // Your code here:
  var box = []; // [3], [8], [3, 8],

  for (let i = 0; i < nums.length; i++) {
    push([nums[i]]);
    var ref = box.length; // 2
    // [ 3, 8, 4, 6, 2 ]
    //      i
    for (let x = 0; x < ref; x++) {
      if (nums[i] > box[x]) {
        box.push([...box[x], nums[i]]);
      }
    }
  }

  var count = 0;
  for (const arr of box) {
    if (arr.length > count) count = arr.length;
  }

  return count;
}

/**
  [3]
  [3, 8]
  [8]
  [3, 4]
  [4]
  [3, 4, 8]
  [4, 6]
  [6]
  [2]

    x
  [[3], [8], [3, 8], [4], [3, 4], [6], [3, 6], [4, 6], [3, 4, 6], [2]]

       i
 *[ 3, 8, 4, 6, 2 ] 
 *[ 3, 4, 2, 1, 11, 12, 20, 21, 6, 7, 8, 9, 10 ] 
    x
* Por cada indice necesito recorre el total del array
 */

module.exports = longestIncreasingSubsequence;
