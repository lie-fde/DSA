/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return
    let map = new Map()
    function dfs(node){
        if(map.has(node)){
            return map.get(node)
        }

        let clone = new _Node(node.val)
        map.set(node,clone)

        for(let neighbour of node.neighbors){
            clone.neighbors.push(dfs(neighbour))
        }
        return clone
    }
    return dfs(node)
};