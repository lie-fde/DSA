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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    function insert(node,val){
        if(node.val>val){
            if(!node.left){
                node.left = new TreeNode(val)
                return 
            }
            insert(node.left,val)
        }else{
            if(!node.right){
                node.right=new TreeNode(val)
                return
            }
            insert(node.right,val)
        }
    }
    insert(root,val)
    return root 
};