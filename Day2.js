"use strict";
const parseNumbers = (numbers) => {
  numbers = numbers.split('\n');
  numbers = numbers.map(numberRow => {
    let values = numberRow.split('\t');
    values = values.map(val => parseInt(val));
    return values;
  });
  return numbers;
}
module.exports = {
  sumPartOne: (numbers) => {
    numbers = parseNumbers(numbers);

    sum = 0;
    numbers.forEach(row => {
      let max = Math.max(...row);
      let min = Math.min(...row);
      sum += Math.abs((max - min));
    })
    return sum;
  },
  sumPartTwo: (numbers) => {
    numbers = parseNumbers(numbers);

    let sum = 0;
    numbers.forEach(row => {
      row.every((num, index) => {
        let shouldContinue = true;
        for (let i = 0; i < row.length; i++) {
          if (i === index || !shouldContinue) continue;
          if (row[i] % num === 0) {
            sum += row[i] / num;
            shouldContinue = false;
          }
        }
        return shouldContinue;
      });
    });
    return sum;
  }
}
