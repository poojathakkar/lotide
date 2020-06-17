// TEST CODE
const eqArrays = function(actual, expected) {
  let value = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      value = false;
    }
    
    } 
  return value;    
};

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual,expected));
};

const middle = function(array) {
  let middleArray = [];
  let i = Math.floor(array.length / 2);
       
      if (array.length > 2 && (array.length % 2) !== 0) {
        middleArray.push(array[i]);
      } 
      else if (array.length > 2 && (array.length % 2) === 0) {
        middleArray.push(array[i-1],array[i]);
      }
    return middleArray;
  };

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


