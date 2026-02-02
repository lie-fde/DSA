/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode(0, head)
    let curr = sentinel.next
    let len = 0
    while (curr) {
        curr = curr.next
        len++
    }
    let prev=sentinel
    for(let i=0;i<len-n;i++){
        prev=prev.next
    }
    prev.next=prev.next.next
    return sentinel.next
};