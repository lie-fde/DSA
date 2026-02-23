/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res=[]
    let ans=[]
    let k=0
    for(let i=1;i<=n;i++){
        if(target[k]==i){
            res.push("Push")
            ans.push(i)
            k++
        }
        else{
            res.push("Push")
            res.push("Pop")
        }
      if(ans.join('')=== target.join('')) return res
    }
};