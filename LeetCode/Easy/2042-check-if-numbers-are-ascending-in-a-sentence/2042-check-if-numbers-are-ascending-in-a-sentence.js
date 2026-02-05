/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    s1 = s.split(' ')
    let prev = -1
    for (let val of s1) {
        if (!isNaN(val)) {
            val = Number(val)
            if (val <= prev) {
                return false
            }

            prev = val
        }
    }
    return true
};