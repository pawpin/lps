'use-strict';
var readline = require('readline');
var logic = require('./lps-logic.js');

var findLongestPalindromicString = logic.lps.findLongestPalindromicString;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var mainLoop = function () {
  rl.question("Please provide input string: ", function (input) { 

    var output = findLongestPalindromicString(input);
    console.log('The longest palindromic substring found in: ' + input + ' is: ', output);

    rl.question("Would you like to try again? y/n ", function (option) {
      if (option == "y") {
        mainLoop(); 
      } else {
        console.log("Exiting ..")
        rl.close();
      }
    });
  });
};

mainLoop();