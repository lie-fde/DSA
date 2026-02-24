/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq={}
    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1
    }
    let pq = new MinPriorityQueue(element => element[0])
    for(let key of Object.keys(freq)){
        pq.enqueue([freq[key],key])
        if(pq.size()>k){
            pq.dequeue()
        }
    }
    return pq.toArray().map(x=>Number(x[1]))
};