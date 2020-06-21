const assertEqual = require('./assertEqual');

const tail = function(array) {
  
  let outputArray = array.slice(1);
  return outputArray;
};

module.exports = assertEqual;
module.exports = tail;