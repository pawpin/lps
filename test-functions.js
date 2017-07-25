const testFunctions = ((() => {
  "use-strict";

  const isPalindrome = str => {
    if (!str) {
      return false;
    }
    
    str.trim();
    
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left++] === str[right--]) {
        continue;
      }
      return false;
    }
    return true;
  };

  const simpleRandomString = (min, max) => {
    let result = "";
    const seed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const maxLength = Math.floor(Math.random() * (max - min + 1) + min);

    for (let i = 0; i < maxLength; i++) {
      result += seed.charAt(Math.floor(Math.random() * seed.length));
    }
    return result;
  };

  const isOdd = n => n & 1;

  const instance = {};  

  instance.isPalindrome = isPalindrome;
  instance.simpleRandomString = simpleRandomString;
  instance.isOdd = isOdd;
  return instance;

}))();

module.exports = {
    testFunctions
}
