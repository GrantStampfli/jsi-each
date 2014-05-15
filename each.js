var each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};

var fruits = ['apples', 'oranges', 'bananas'];

each(fruits, function(fruit) {
  console.log("I need to purchase " + fruit + ".");
});

each(fruits, function(fruit) {
  console.log("I purchased " + fruit + " today.");
});
