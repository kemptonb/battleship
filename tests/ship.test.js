const ship = require('../ship');
const testShip = ship(2);

test('adds 1 + 2 to equal 3', () => {
  expect(testShip.length).toBe(2);
});