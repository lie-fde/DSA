/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {")":"(","]":"[","}":"{"}
    for (let ch of s){
        if(map[ch]){
            let top=stack[stack.length-1]
            if(top===map[ch]){
                stack.pop()
            }
            else{
                return false
            }
        }
        else{
            stack.push(ch)
        }
    }
    return stack.length===0
};