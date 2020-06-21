const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

const middle = function(array) {
  let middleArray = [];
  let i = Math.floor(array.length / 2);
      
    if (array.length > 2 && (array.length % 2) !== 0) {
        middleArray.push(array[i]);
    } else if (array.length > 2 && (array.length % 2) === 0) {
        middleArray.push(array[i-1],array[i]);
    }
    return middleArray;
  };

module.exports = assertEqual;
module.exports = middle;


