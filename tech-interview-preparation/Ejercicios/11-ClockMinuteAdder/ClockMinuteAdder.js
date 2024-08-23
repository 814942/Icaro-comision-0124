function clockMinuteAdder(time, minutesToAdd) {
  // Your code here: O(1)
  let result =
    minutesToAdd +
    time.split(":").reduce((acc, ele) => {
      return +acc * 60 + +ele;
    }, 0);

  let hour = "" + Math.floor(result / 60);

  hour = "" + (hour % 12);
  hour = hour.length === 2 ? hour : "0" + hour;

  let min = "" + (result % 60);

  return `${hour}:${min}`;
}

// time: "1:29" --> 30
// 1 - 24 // 0 - 59
// arg1: string, arg2: number
// Deberia pasar el number
// Deberia separa en variables horas y minutos

module.exports = clockMinuteAdder;
