/**
 * 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 */

// Classic DFS approach with keeping track on cycles.
var cloneGraph = function (node) {
  return clone(node);

  function clone(node, visited = {}) {
    // Base case.
    if (!node) {
      return;
    }

    // If node is visited return the reference to the node
    // and don't touch neighbors.
    if (visited[node.val]) {
      return visited[node.val];
    }

    // Create node copy and mark as visited adding reference to dictionary.
    const copy = new Node(node.val);
    visited[node.val] = copy;

    // Copy neibhours recursively.
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor, visited));
    }

    // return top node.
    return copy;
  }
};
