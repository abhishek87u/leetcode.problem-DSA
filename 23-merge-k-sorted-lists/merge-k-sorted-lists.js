/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const mergeTwo = (a, b) => {
        let dummy = new ListNode(0), curr = dummy;
        while (a && b) {
            if (a.val < b.val) {
                curr.next = a; a = a.next;
            } else {
                curr.next = b; b = b.next;
            }
            curr = curr.next;
        }
        curr.next = a || b;
        return dummy.next;
    };

    while (lists.length > 1) {
        let merged = [];
        for (let i = 0; i < lists.length; i += 2) {
            merged.push(mergeTwo(lists[i], lists[i + 1] || null));
        }
        lists = merged;
    }

    return lists[0] || null;
};
