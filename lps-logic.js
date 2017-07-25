const lps = ((str => {
    "use-strict";  
    /* 
    /* interleave with special char for 2n+1 string input and odd palindrome conversion 
    /* add '@' in the beginning and '$' in the end for avoiding bounds check
    */
    const interleaveString = str => {
        const num = str.length;
        if (num === 0) {
            return "@$";
        }

        let result = "@";
        for (let i = 0; i < num; i++) {
            result += `#${str.substring(i, i + 1)}`;
        }
        result += "#$";
        return result;
    };

    /* calculates max value - largest palindrome is centered at maximum value character */
    const maxArrayValue = (str, num, pal) => {
        let length = 0;     // length of longest palindromic substring
        let centerIdx = 0;  // center index of longest palindromic substring

        for (let i = 1; i < num - 1; i++) {
            if (pal[i] <= length) {
                continue;
        }    
            length = pal[i];
            centerIdx = i;
        }

        const startIdx = ((centerIdx - 1 - length) / 2 | 0);
        const result = str.substring(startIdx, startIdx + length);
        return result;
    };

    const findLongestPalindromicString = str => { 
        if(!str) {
            return "Bad input.";
        } 

        str.trim();

        const preprocessed = interleaveString(str);
        const num = preprocessed.length;

        const palLengths = new Array(num); // stores length of palindrome centered at i
        let prevPalCenter = 0;
        let prevPalEnd = 0;

        for (let i = 1; i < num - 1; i++) {
            const mirroredIndex = prevPalCenter - (i - prevPalCenter);
        
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
        const result = maxArrayValue(str, num, palLengths);
        return result;
    };

    const instance = {};  

    instance.findLongestPalindromicString = findLongestPalindromicString;
    instance.interleaveString = interleaveString; 
    return instance;

}))();

module.exports = {
    lps
}
