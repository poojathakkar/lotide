const takeUntil = function (array, callback) {
  const results1 = [];
  for (let item of array) {
    if (callback(item))
      break;
    results1.push(item);  
  }
  return results1;
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === expected[i]) {
          return true;
        } 
      } 
    }    
};

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1,array2));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
console.log(results2);