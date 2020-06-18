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

const map = function(array, callback) {

  const results1 = [];
  for (let item of array) {
      results1.push(callback(item));
  }
  return results1;
}; 
 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.slice(1)),['round','ontrol','o','ajor','om']);