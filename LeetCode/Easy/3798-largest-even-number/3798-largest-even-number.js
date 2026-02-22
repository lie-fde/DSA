/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
   let n=s.split('')
   if(n.length==1 && n[0]=="1") return ""
   let last = n[n.length-1]
   while(Number(last)%2!=0 && n.length>0){
    n.pop()
    last = n[n.length-1]
   }
   return n.join('')
};