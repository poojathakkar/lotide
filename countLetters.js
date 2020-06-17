const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countLetters = function(string) {
  let result = {};
    for (const letters of string) {
      if (letters !== " ") {
        if (result[letters]) {
          result[letters] += 1;
        } else {
          result[letters] = 1;
        }
      } 
    }
  return result;
} 

console.log(countLetters("lighthouse in the house"));
