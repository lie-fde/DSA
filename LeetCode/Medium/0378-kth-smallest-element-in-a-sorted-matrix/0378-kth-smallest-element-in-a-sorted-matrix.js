/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let flat = [].concat(...matrix)
    let sorted = flat.sort((a,b)=>a-b)
    return sorted[k-1] 
};