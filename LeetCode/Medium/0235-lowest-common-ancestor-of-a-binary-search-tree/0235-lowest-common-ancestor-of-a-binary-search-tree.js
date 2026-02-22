/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function ancestor(node,p,q){
        if(node.val > p.val && node.val >q.val){
            return ancestor(node.left,p,q)
        }
        else if(node.val< p.val && node.val<q.val){
            return ancestor(node.right,p,q)
        }
        else{
            return node
        }
    }
    return ancestor(root,p,q)
};