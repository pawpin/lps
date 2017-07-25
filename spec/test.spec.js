"use-strict";
const test = require('../test-functions.js');
const logic = require('../lps-logic.js');

const isPalindrome = test.testFunctions.isPalindrome;
const simpleRandomString = test.testFunctions.simpleRandomString;
const isOdd = test.testFunctions.isOdd;

const findLongestPalindromicSubstring = logic.lps.findLongestPalindromicString;
const interleaveString = logic.lps.interleaveString;

describe('Longest Palindromic Substring tests', () => {
    describe('Empty string test', () => {
        const result = findLongestPalindromicSubstring("");
        it('Should return bad input for empty string', () => {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });

    describe('Null test', () => {
        const result = findLongestPalindromicSubstring(null);
        it('Should return bad input for null', () => {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });

    describe('Undefined test', () => {
        const result = findLongestPalindromicSubstring();
        it('Should return bad input for undefined', () => {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });   

    describe('Palindromic string test', () => {
        const input = simpleRandomString(100, 1000);
        const result = findLongestPalindromicSubstring(input);
        it('Should return palindromic result', () => {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Single char test', () => {
        const input = "c";
        const result = findLongestPalindromicSubstring("x");
        it('Should return palindromic result for single char', () => {
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Whitespaces test', () => {
         const str1 = simpleRandomString(10, 500);
         const str2 = simpleRandomString(10, 500);
         const input = `${str1}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${str2}`;
         const result = findLongestPalindromicSubstring(input);
         it('Should return palindromic result for whitespace string', () => {
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Random case test', () => {
        const input = simpleRandomString(100, 1000);
        const result = findLongestPalindromicSubstring(input);
        it('Should support random case string', () => {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Odd length strings test', () => {
        let input = ""; 
        for (let i = 0; i < 100; i++) {       
            const str = simpleRandomString(100, 1000);
            if(isOdd(str.length)) {
               input = str;
            }
        }

        const result = findLongestPalindromicSubstring(input);
        it('Should support odd length strings', () => {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    /* code already converts every even palindrome to odd */
    describe('Even length strings test', () => {
        let input = ""; 
        for (let i = 0; i < 100; i++) {       
            const str = simpleRandomString(100, 1000);
            if(!isOdd(str.length)) {
               input = str;
            }
        }

        const result = findLongestPalindromicSubstring(input);
        it('Should support even length strings', () => {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })
    
    describe('Interleave string tests', () => {
        const input = simpleRandomString(1, 5);
        const result = interleaveString(input);
        
        it('Should begin with "@" and end with "$"', () => {           
            let assert = false;
            if (result.startsWith("@") && (result.slice(-1) === "$")) {
                assert = true;
            }
            
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(assert).toEqual(true);
        });

        it('Should be interleaved with "#', () => {           
            let assert = false;
            let count = 0;
            
            for (let i = 1; i < result.indexOf(result.substr(result.length -1)); i++) { 
                if (result[i] === "#") { count += 1;}
            }

            if (count === (result.length-1)/2) {
                assert = true;
            }
                
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result.split("#").length-1).not.toBeLessThan(1);
            expect(assert).toEqual(true);
        });
    })
})