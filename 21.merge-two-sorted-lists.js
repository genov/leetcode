/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    let result = new ListNode();
    const carry = result;

    if (!l1 && !l2) return null;

    while (l1 || l2) {
        if (l1 && l2) {
            let asc = l1.val <= l2.val;
            result.val = asc ? l1.val : l2.val;
            l1 = asc ? l1.next : l1;
            l2 = asc ? l2 : l2.next;
        } else if (l1) {
            result.val = l1.val;
            l1 = l1.next;
        } else if (l2) {
            result.val = l2.val;
            l2 = l2.next;
        }

        result.next = l1 || l2 ? new ListNode() : null;
        result = result.next;
    }

    return carry;
};

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
//
// Input: 3->5->7, 1->3->6
// Output: 1->3->3->5->6->7

// Input: 8, 1->3->6
// Output: 1->3->6->8

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(0);
l1.next = new ListNode(5);
l1.next.next = new ListNode(11);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(6);

const result = mergeTwoLists(l1, l2);
console.log('result', result);
// Output 0->1->3->5->6->11

