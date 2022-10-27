const Manager = require('../lib/Manager');

test('Test office number create', () => {
  const officeNumber = 43;
  const manager = new Manager(
    'Jeff Goldblum',
    12345,
    `jeff@goldblum.com`,
    officeNumber
  );
  expect(manager.officeNumber).toBe(officeNumber);
});

test('Test Role', () => {
  const role = 'Manager';
  const manager = new Manager('Jeff Goldblum', 12345, `jeff@goldblum.com`, 43);
  expect(manager.getRole()).toBe(role);
});
