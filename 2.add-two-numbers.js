
/**
 * Math, Linked Lists
 *
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
const addTwoNumbers = function(l1, l2) {
    let res = new ListNode(); // Keeps pointer at result first node.
    let curr = res; // Keeps track on result list.
    let carry = 0; // Stores carry number if sum > 9;

    // Iterate unless carry number or current node exists;
    while (curr || carry) {
        let sum = carry;
        sum += l1 ? l1.val : 0;
        sum += l2 ? l2.val : 0;
        curr.val = sum > 9 ? sum % 10 : sum;
        carry = sum > 9 ? 1 : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next: null;

        // Create new ListNode if there is at least one node left in l1 or l2, or carry number is 1;
        curr.next = l1 || l2 || carry ? new ListNode() : null;
        curr = curr.next;
    }

    return res;
};

function ListNode(val) {
     this.val = val;
     this.next = null;
}

// Test
const list1 = new ListNode(1);
const list2 = new ListNode(9);
list2.next = new ListNode(9);

const result = addTwoNumbers(list1, list2);
console.log(result);