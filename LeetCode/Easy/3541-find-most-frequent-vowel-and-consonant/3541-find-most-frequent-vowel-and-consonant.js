/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq={}
    for(let ch of s){
        freq[ch]= (freq[ch]||0)+1
    }
    let vowel = ['a','e','i','o','u']
    let maxVowel=0
    let maxConsonant=0
    for(let ch of s){
        if(vowel.includes(ch)){
            if(freq[ch]>maxVowel){
                maxVowel=freq[ch]
            }
        }
        else{
            if(freq[ch]>maxConsonant){
                maxConsonant=freq[ch]
            }
        }
    }
    return maxVowel + maxConsonant
};