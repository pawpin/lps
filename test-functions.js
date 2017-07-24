var testFunctions = (function () {
  'use-strict';

  var isPalindrome = function (str) {
    if (!str) {
      return false;
    }
    
    str.trim();
    
    var left = 0;
    var right = str.length - 1;

    while (left < right) {
      if (str[left++] === str[right--]) {
        continue;
      }
      return false;
    }
    return true;
  }

  var simpleRandomString = function (min, max) {
    var result = "";
    var seed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var maxLength = Math.floor(Math.random() * (max - min + 1) + min);

    for (var i = 0; i < maxLength; i++) {
      result += seed.charAt(Math.floor(Math.random() * seed.length));
    }
    return result;
  }

  var isOdd = function (n) { 
    return n & 1; 
  };

  var instance = {};  

  instance.isPalindrome = isPalindrome;
  instance.simpleRandomString = simpleRandomString;
  instance.isOdd = isOdd;
  return instance;

})();

module.exports = {
  testFunctions
}
