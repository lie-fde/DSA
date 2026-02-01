/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let seen = new Set()
    let curr1=headA
    while(curr1){
        seen.add(curr1)
        curr1=curr1.next
    }
    let curr2=headB
    while(curr2){
        if(seen.has(curr2)) return curr2
        curr2=curr2.next
    }
    return null
};