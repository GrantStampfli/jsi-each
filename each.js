var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log("I need to purchase " + fruit + ".");
};

var indicateFruitPurchased = function(fruit) {
  console.log("I purchased " + fruit + " today.");
};

var startIndicating = function(array, fn) {
  var continueIndicating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIndicating(array, n+1, fn);
    }
  };
  continueIndicating(array, 0, fn);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicating(fruits, indicateFruitThatNeedsPurchasing);
startIndicating(fruits, indicateFruitPurchased);
