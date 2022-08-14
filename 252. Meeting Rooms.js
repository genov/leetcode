/**
 * 252. Meeting Rooms
 * https://leetcode.com/problems/meeting-rooms/
 */

var canAttendMeetings = function (intervals) {
  if (intervals.length < 2) {
    return true;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    const current = intervals[i];
    const next = intervals[i + 1];

    const [currentStart, currentEnd] = current;
    const [nextStart] = next;

    if (currentEnd <= nextStart) {
      continue;
    }

    if (nextStart < currentEnd || currentStart === nextStart) {
      return false;
    }
  }

  return true;
};
