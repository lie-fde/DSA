/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let l = 0
    let r = s.length - 1
    let word = s.split('')
    while (l < r) {
        while (!letters.includes(word[l]) && l < r) {
            l++
        }
        while (!letters.includes(word[r]) && r > l) {
            r--
        }

        if (l < r) [word[l], word[r]] = [word[r], word[l]]
        l++;
        r--;
    }

    return word.join("")
};