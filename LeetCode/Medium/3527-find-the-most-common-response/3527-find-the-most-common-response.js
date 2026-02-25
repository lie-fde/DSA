/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    let freq={}
    for(let subarray of responses){
        let unique = new Set()
        for(let word of subarray){
            if(!unique.has(word)){
                unique.add(word)
                freq[word] = (freq[word] || 0) + 1
            }
        }
    }
    
    let maxResponse = responses[0][0]

    for(let [currentResponse,currentFrequency] of Object.entries(freq)){
        let bestFrequency = freq[maxResponse]

        if(bestFrequency < currentFrequency || bestFrequency == currentFrequency && currentResponse < maxResponse){
            maxResponse = currentResponse
        }
    }

    return maxResponse
};