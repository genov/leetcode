/**
 * 690. Employee Importance
 *
 * https://leetcode.com/problems/employee-importance/
 */

var GetImportance = function (employees, id) {
  const map = employees.reduce((acc, employee) => {
    const { id } = employee;
    acc.set(id, employee);

    return acc;
  }, new Map());

  function calcImportance(id, map) {
    if (!map.has(id)) {
      return 0;
    }

    const employee = map.get(id);
    let { importance, subordinates } = employee;

    for (const id of subordinates) {
      importance += calcImportance(id, map);
    }

    return importance;
  }

  return calcImportance(id, map);
};
