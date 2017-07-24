var lps = (function (str) {
    'use-strict';
    
    /* 
    /* interleave with special char for 2n+1 string input and odd palindrome conversion 
    /* add '@' in the beginning and '$' in the end for avoiding bounds check
    */
    var interleaveString = function (str) {
        var num = str.length;
        if (num === 0) {
            return "@$";
        }

        var result = "@";
        for (var i = 0; i < num; i++) {
            result += "#" + str.substring(i, i + 1);
        }
        result += "#$";
        return result;
    }

    /* calculates max value - largest palindrome is centered at maximum value character */
    var maxArrayValue = function (str, num, pal) {
        var length = 0;     // length of longest palindromic substring
        var centerIdx = 0;  // center index of longest palindromic substring

        for (var i = 1; i < num - 1; i++) {
            if (pal[i] <= length) {
                continue;
        }    
            length = pal[i];
            centerIdx = i;
        }

        var startIdx = ((centerIdx - 1 - length) / 2 | 0);
        var result = str.substring(startIdx, startIdx + length);
        return result;
    }

    var findLongestPalindromicString = function (str) { 
        if(!str) {
            return "Bad input.";
        } 

        str.trim();

        var preprocessed = interleaveString(str);
        var num = preprocessed.length;

        var palLengths = new Array(num); // stores length of palindrome centered at i
        var prevPalCenter = 0;
        var prevPalEnd = 0;

        for (var i = 1; i < num - 1; i++) {
            var mirroredIndex = prevPalCenter - (i - prevPalCenter);
        
            if (prevPalEnd > i) {
                palLengths[i] = Math.min(prevPalEnd - i, palLengths[mirroredIndex]);
            } else {
                palLengths[i] = 0;
            }

            /* check length of 'i' palindrome */
            while ((preprocessed.charAt(i + 1 + palLengths[i]) === preprocessed.charAt(i - 1 - palLengths[i]))) {
                palLengths[i]++;
            }

            /* no more traversal of previous palindrome towards i - simply reset its center */
            if (prevPalEnd < i + palLengths[i]) {
                prevPalCenter = i;
                prevPalEnd = i + palLengths[i];
            }
    }
        var result = maxArrayValue(str, num, palLengths);
        return result;
    }

    var instance = {};  

    instance.findLongestPalindromicString = findLongestPalindromicString;
    instance.interleaveString = interleaveString; 
    return instance;

})();

module.exports = {
    lps
}

