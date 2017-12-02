"use strict";
module.exports = {
  sumPartOne: (number) => {
    if (typeof number === 'number') {
      number = number + "";
    }
    number = number.split('');
    let total = 0;
    number.forEach((digit, index, num) => {
      let current = parseInt(num[index]);
      if (index === num.length - 1) {
        let prev = parseInt(num[0]);
        if (prev === current) {
          total += current;
        }
        return
      }
      let next = parseInt(num[index + 1]);
      if (current === next) {
        total += current;
      }
    });
    return total;
  },
  sumPartTwo: (number) => {
    if (typeof number === 'number') {
      number = number + "";
    }
    number = number.split('');
    let total = 0;
    let half = number.length / 2;

    number.forEach((digit, index, num) => {
      let current = parseInt(num[index]);
      let prev = parseInt(num[(index + half) % number.length]);
      if (prev === current) {
        total += current;
      }
    });
    return total;
  }
};
