/**
 * 56. Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/
 */

var merge = function (intervals) {
  let n = intervals.length;

  for (let i = 0; i < n; i++) {
    // Get current and next intervals.
    const current = intervals[i];
    const next = intervals[i + 1];

    // Bases cases: return if one of them is missing.
    if (!current || !next) {
      break;
    }

    const [currStart, currEnd] = current;
    const [nextStart, nextEnd] = next;

    // Skip if there's a gap betweem intervals.
    if (currEnd < nextStart) {
      continue;
    }

    // If current starts later than previous ends - SWAP IN-PLACE.
    // Also 1 step backwards for re-check.
    if (currStart > nextEnd) {
      intervals[i] = next;
      intervals[i + 1] = current;
      i = -1;
      continue;
    }

    // Merge part: take min start and max end from both intervals.
    // DO 1 step back for re-check.
    // Decrement size by 1.
    const merge = [];
    merge[0] = Math.min(currStart, nextStart);
    merge[1] = Math.max(currEnd, nextEnd);
    intervals.splice(i, 2, merge);
    i = -1;
    n--;
  }

  return intervals;
};
