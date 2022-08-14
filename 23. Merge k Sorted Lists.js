/**
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */
var mergeKLists = function (lists) {
  const sorted = [];

  // Traverse through every linked-list and every node
  // and inject values to sorted array using Binary Insertion Sort.
  for (let i = 0; i < lists.length; i++) {
    let current = lists[i];
    while (current) {
      const index = bs(current);
      sorted.splice(index, 0, current.val);
      current = current.next;
    }
  }

  // Binary search returns index where the new element should be injected.
  function bs(node) {
    let start = 0;
    let end = sorted.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (sorted[mid] === node.val) {
        start = mid;
        break;
      } else if (sorted[mid] > node.val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return start;
  }

  // Iterate through sorted array of values and convet it to linked list.
  let head = null;
  let prev = null;
  for (let i = 0; i < sorted.length; i++) {
    const node = new ListNode(sorted[i]);

    if (prev) {
      prev.next = node;
    } else {
      head = node;
    }

    prev = node;
  }

  return head;
};
