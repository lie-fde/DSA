/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  let seen= new Set()
  for(let val of s){
    if(seen.has(val)){
        return val
    }
    seen.add(val)
  }
};