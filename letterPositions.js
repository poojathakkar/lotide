const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const assertArraysEqual = function(array1, array2) {
  
  console.log(eqArrays(array1,array2));
};

const eqArrays = function(actual, expected) {
  let value = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      value = false;
    } 
  } 
  return value;    
};

const letterPositions = function(sentence) {
  const result = {};
  //logic  to update result here
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        if (result[sentence[i]]) {
            (result[sentence[i]]).push(i);
          } else {
            result[sentence[i]] = [i];
          } 
        }       
    }  
  return result;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
