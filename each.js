var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log("I need to purchase " + fruit + ".");
};

var indicateFruitPurchased = function(fruit) {
  console.log("I purchased " + fruit + " today.");
};

var continueIndicating = function(array, n, fn) {
  if (n < array.length) {
    fn(array[n]);
    continueIndicating(array, n+1, fn);
  }
};

var startIndicatingFruitThatNeedsPurchasing = function(array) {
  continueIndicating(array, 0, indicateFruitThatNeedsPurchasing);
};

var startIndicatingFruitPurchased = function(array, fn) {
  continueIndicating(array, 0, fn);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicatingFruitThatNeedsPurchasing(fruits);
startIndicatingFruitPurchased(fruits, indicateFruitPurchased);
