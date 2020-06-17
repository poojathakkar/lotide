// TEST CODE
const eqArrays = function(array1, array2) {
  let value = false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      value = false;
    } else {
      value = true;
    }
    
    } 
  return value;    
};

const assertArraysEqual = function(array1, array2) {
  
  console.log(eqArrays(array1,array2));
};

assertArraysEqual([1, 2, 3], [3, 2, 1]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
