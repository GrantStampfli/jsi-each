var indicateFruitThatNeedsPurchasing = function(fruit) {
  console.log("I need to purchase " + fruit + ".");
};

var indicateFruitPurchased = function(fruit) {
  console.log("I purchased " + fruit + " today.");
};

var continueIndicatingFruitThatNeedsPurchasing = function(array, n) {
  if (n < array.length) {
    indicateFruitThatNeedsPurchasing(array[n]);
    continueIndicatingFruitThatNeedsPurchasing(array, n+1);
  }
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

var startIndicatingFruitPurchased = function(array) {
  continueIndicating(array, 0, indicateFruitPurchased);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicatingFruitThatNeedsPurchasing(fruits);
startIndicatingFruitPurchased(fruits);
