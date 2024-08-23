const mdArraySum = (arr) =>
  arr.reduce(
    (total, elemAct) =>
      total + (Array.isArray(elemAct) ? mdArraySum(elemAct) : elemAct),
    0
  );

module.exports = mdArraySum;
