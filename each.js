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

var continueIndicatingFruitPurchased = function(array, n) {
  if (n < array.length) {
    indicateFruitPurchased(array[n]);
    continueIndicatingFruitPurchased(array, n+1);
  }
};

var startIndicatingFruitThatNeedsPurchasing = function(array) {
  continueIndicatingFruitThatNeedsPurchasing(array, 0);
};

var startIndicatingFruitPurchased = function(array) {
  continueIndicatingFruitPurchased(array, 0);
};

var fruits = ['apples', 'oranges', 'bananas'];
startIndicatingFruitThatNeedsPurchasing(fruits);
startIndicatingFruitPurchased(fruits);
