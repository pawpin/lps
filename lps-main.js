"use-strict";
const readline = require('readline');
const logic = require('./lps-logic.js');

const findLongestPalindromicString = logic.lps.findLongestPalindromicString;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mainLoop = () => {
  rl.question("Please provide input string: ", input => { 

    const output = findLongestPalindromicString(input);
    console.log(`The longest palindromic substring found in: ${input} is: `, output);

    rl.question("Would you like to try again? y/n ", option => {
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