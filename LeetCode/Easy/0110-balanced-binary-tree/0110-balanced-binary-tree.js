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
 * @return {boolean}
 */
 function Height(node){
    if (!node) return 0
    return 1 + Math.max(Height(node.left),Height(node.right))
 }
var isBalanced = function(root) {
    
    const balanced = (node) =>{
        if(!node) return true
        let leftHeight = Height(node.left)
        let RightHeight = Height(node.right)
        if(Math.abs(leftHeight-RightHeight)>1){
            return false
        }
        return (balanced(node.left)&&balanced(node.right))
    }
    return balanced(root)
};