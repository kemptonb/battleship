const gameboard = require('../gameboard');

test('adds 1 + 2 to equal 3', () => {
  expect(gameboard(1, 2)).toBe(3);
});