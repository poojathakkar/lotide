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

const without = function(source, itemsToRemove) {
  let finalArray = [];
  for (let j = 0; j < source.length; j++) {
      if (source[j] !== itemsToRemove[j]) {
        finalArray.push(source[j]);
      }
  }
  return finalArray;
}; 

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
