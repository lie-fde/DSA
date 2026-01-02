/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    let res = 0
    let pow = Math.abs(n)
    if (pow % 2 == 0) res = myPow(x*x,pow/2)
    else res = myPow(x*x,(pow-1)/2) *x
    return n > 0 ? res: (1/res)
};