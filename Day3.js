"use strict";
module.exports = {
  partOne: (position) => {
    let edgeSize = Math.ceil(Math.sqrt(position));
    if (edgeSize % 2 === 0) edgeSize += 1;
    let edgeCenter = Math.floor(edgeSize / 2);

    let centers = [
      Math.pow(edgeSize, 2) - 3 * (edgeSize - 1) + edgeCenter, //Top
      Math.pow(edgeSize, 2) - 2 * (edgeSize - 1) + edgeCenter, //Left
      Math.pow(edgeSize, 2) - (edgeSize - 1) + edgeCenter, //Bottom
      Math.pow(edgeSize - 2, 2) + edgeCenter//Right
    ];

    let shortestMove = edgeSize;
    centers.forEach(center => {
      if (Math.abs(center - position) < shortestMove) {
        shortestMove = Math.abs(center - position);
      }
    });

    return shortestMove + edgeCenter;
  },
  partTwo: (value) => {
   //Looked up number sequence on OEIS, kind of a lame one.
  }
};
