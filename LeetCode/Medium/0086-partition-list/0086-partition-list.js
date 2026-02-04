/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lhead = new ListNode(0)
    let rhead = new ListNode(0)
    let curr=head
    let ltail=lhead
    let rtail=rhead
    while(curr){
        if(curr.val<x){
            ltail.next=curr
            ltail=ltail.next
            curr=curr.next
        }
        else{
            rtail.next=curr
            rtail=rtail.next
            curr=curr.next
        }
    }
    rtail.next=null
    ltail.next=rhead.next
    return lhead.next

};