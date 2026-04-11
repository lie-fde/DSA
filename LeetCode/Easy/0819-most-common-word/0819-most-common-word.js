/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().match(/\b[a-zA-Z]+\b/g)
    let freq = {}
    for(let word of words){
       freq[word] = (freq[word]||0) +1
    }
    for(let word of banned){
        delete freq[word]
    }
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1])
    return sorted[0][0]
};