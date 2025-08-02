/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let count = 0, node = head;
    while (node && count < k) {
        node = node.next;
        count++;
    }
    if (count < k) return head;
    
    let prev = null, curr = head, next = null;
    for (let i = 0; i < k; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head.next = reverseKGroup(curr, k);
    return prev;
};
