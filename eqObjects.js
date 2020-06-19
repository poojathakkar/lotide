const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
    for (let i = 0; i < array1.length; i++) { 
      if (array1[i] !== array2[i]) {
        return false;
      }
    } 
  return true;    
};

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  if (key1.length !== key2.length) {
    return false;
  } 
    for (const elm of key1) {
        if ((Array.isArray(object1[elm])) && (Array.isArray(object2[elm]))) {
          return (eqArrays(object1[elm], object2[elm])) 
        } 
        else if (object1[elm] !== object2[elm]) {
          return false;
        } 
    }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false