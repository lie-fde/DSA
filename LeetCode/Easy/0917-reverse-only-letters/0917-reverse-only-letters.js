/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let l=0
    let r=s.length-1
    let word = s.split('')
    while(l<r){
       while(!letters.includes(s[l]) && l<s.length-1){
        l++
       }
       console.log("l",l)
       while(!letters.includes(s[r]) && r>0){
        r--
       }
       
    if (l<r) [word[l],word[r]] = [word[r],word[l]] 
       l++;
       r--;
    }

    return word.join("")
};