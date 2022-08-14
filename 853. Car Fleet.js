/**
 * 853. Car Fleet (medium) O(2N).
 *
 * https://leetcode.com/problems/car-fleet/
 *
 * Solution: https://www.youtube.com/watch?v=H5w6doOXz10
 */

var carFleet = function (target, position, speed) {
  const cars = [];

  for (let i = 0; i < position.length; i++) {
    const car = new Car(position[i], (target - position[i]) / speed[i]);
    cars.push(car);
  }

  // Step 1: Sort by position.
  cars.sort((a, b) => b.position - a.position);

  let lastTime = -1;
  let fleets = 0;

  // Step 2: Increment fleets by 1 if current car arrives faster than the next.
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].time > lastTime) {
      fleets++;
      lastTime = cars[i].time;
    }
  }

  return fleets;
};

function Car(position, time) {
  this.position = position || 0;
  this.time = time;
}
