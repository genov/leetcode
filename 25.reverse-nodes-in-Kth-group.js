/**
 * 25. Reverse Nodes in k-Group
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Solution: time: O(n), space O(1)
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let groupStart = head;
  let lastGroupEnd;

  while (groupStart) {
    const firstGroupElement = getNthElement(groupStart, 1);
    const lastGroupElement = getNthElement(groupStart, k);

    if (!lastGroupElement) {
      break;
    }

    let nextGroupStart = lastGroupElement.next;

    for (let i = k; i >= 1; i--) {
      const current = getNthElement(groupStart, i);
      const previous = getNthElement(groupStart, i - 1);

      if (i > 1) {
        current.next = previous;
      } else {
        current.next = nextGroupStart;
      }
    }

    if (!lastGroupEnd) {
      head = lastGroupElement;
    } else {
      lastGroupEnd.next = lastGroupElement;
    }

    groupStart = nextGroupStart;
    lastGroupEnd = firstGroupElement;
  }

  return head;
};

function getNthElement(head, n) {
  let current = head;
  let count = 1;

  while (current && count < n) {
    current = current.next;
    count++;
  }

  return count === n ? current : null;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const test = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(reverseKGroup(test, 2));
