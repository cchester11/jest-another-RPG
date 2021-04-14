const Potion = require('../lib/Potion.js')

test('creates a health potion object', () => {
  //potion is the object 
  const potion = new Potion('health')
  //nesting properties into potion such as name and value (parameters that will recieve values)
  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
})

test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});