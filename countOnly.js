const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const items of allItems) {
    if(itemsToCount[items]) {
      if (result[items]) {
        result[items] += 1;
      } else {
        result[items] = 1;
      }
        //console.log(result);
    }    
  }

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);