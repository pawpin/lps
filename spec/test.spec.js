'use-strict';

var test = require('../test-functions.js');
var logic = require('../lps-logic.js');

var isPalindrome = test.testFunctions.isPalindrome;
var simpleRandomString = test.testFunctions.simpleRandomString;
var isOdd = test.testFunctions.isOdd;

var findLongestPalindromicSubstring = logic.lps.findLongestPalindromicString;
var interleaveString = logic.lps.interleaveString;

describe('Longest Palindromic Substring tests', function() {
    describe('Empty string test', function() {
        var result = findLongestPalindromicSubstring("");
        it('Should return bad input for empty string', function() {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });

    describe('Null test', function() {
        var result = findLongestPalindromicSubstring(null);
        it('Should return bad input for null', function() {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });

    describe('Undefined test', function() {
        var result = findLongestPalindromicSubstring();
        it('Should return bad input for undefined', function() {
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(result).toEqual('Bad input.');
        });
    });   

    describe('Palindromic string test', function() {
        var input = simpleRandomString(100, 1000);
        var result = findLongestPalindromicSubstring(input);
        it('Should return palindromic result', function() {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Single char test', function() {
        var input = "c";
        var result = findLongestPalindromicSubstring("x");
        it('Should return palindromic result for single char', function() {
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Whitespaces test', function() {
         var str1 = simpleRandomString(10, 500);
         var str2 = simpleRandomString(10, 500);
         var input = str1 + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + str2;
         var result = findLongestPalindromicSubstring(input);
         it('Should return palindromic result for whitespace string', function() {
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Random case test', function() {
        var input = simpleRandomString(100, 1000);
        var result = findLongestPalindromicSubstring(input);
        it('Should support random case string', function() {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    describe('Odd length strings test', function() {
        var input = ""; 
        for (var i = 0; i < 100; i++) {       
            var str = simpleRandomString(100, 1000);
            if(isOdd(str.length)) {
               input = str;
            }
        }

        var result = findLongestPalindromicSubstring(input);
        it('Should support odd length strings', function() {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })

    /* code already converts every even palindrome to odd */
    describe('Even length strings test', function() {
        var input = ""; 
        for (var i = 0; i < 100; i++) {       
            var str = simpleRandomString(100, 1000);
            if(!isOdd(str.length)) {
               input = str;
            }
        }

        var result = findLongestPalindromicSubstring(input);
        it('Should support even length strings', function() {        
            expect(isPalindrome(result)).toBeDefined();
            expect(isPalindrome(result)).not.toBe(null);
            expect(isPalindrome(result)).toEqual(true);
        });
    })
    
    describe('Interleave string tests', function() {
        var input = simpleRandomString(1, 5);
        var result = interleaveString(input);
        
        it('Should begin with "@" and end with "$"', function() {           
            var assert = false;
            if (result.startsWith("@") && (result.slice(-1) === "$")) {
                assert = true;
            }
            
            expect(result).toBeDefined();
            expect(result).not.toBe(null);
            expect(assert).toEqual(true);
        });

        it('Should be interleaved with "#', function() {           
            var assert = false;
            var count = 0;
            
            for (var i = 1; i < result.indexOf(result.substr(result.length -1)); i++) { 
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
