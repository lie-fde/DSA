/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function inverse(node){
        if(!node) return
        if(node.left || node.right){
            let temp = node.left || null
            node.left= node.right || null
            node.right = temp
        }
        if(node.left){
            inverse(node.left)
        }
        if(node.right){
            inverse(node.right)
        }
    }
    inverse(root)

    return root
};