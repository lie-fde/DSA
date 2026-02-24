/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue()
    for(let num of stones){
        pq.enqueue(num)
    }
    while(pq.size()>1){
        let y = pq.dequeue()
        let x = pq.dequeue()
        if(x!=y){
            let a = y-x
            pq.enqueue(a)
        }
    }

    return pq.size()==0 ? 0 : pq.front()
};