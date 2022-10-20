const Employee = require(`../lib/Employee`);

test(`Can initiate new employee`, () => {
  const employee = new Employee();
  expect(typeof employee).toBe(`object`);
});

test(`Testing name`, () => {
  const name = `Kayla`;
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test(`Testing ID`, () => {
  const id = 310321;
  const employee = new Employee(`Afton`, id);
  expect(employee.id).toBe(id);
});

test(`Testing email`, () => {
  const email = `leeroyJenkins@battle.net`;
  const employee = new Employee(`Leeroy`, 123456, email);
  expect(employee.email).toBe(email);
});

// Method Tests

test(`Test getName() method`, () => {
  const name = `Danny Ocean`;
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

test(`Test getId() method`, () => {
  const id = 9671111;
  const employee = new Employee(`Pete Zhah`, id);
  expect(employee.getId()).toBe(id);
});

test(`Test getEmail() method`, () => {
  const email = `RickonMorty@wubalubadubdub.com`;
  const employee = new Employee(`Rickon`, 202014, email);
  expect(employee.getEmail()).toBe(email);
});

test(`Test for role`, () => {
  const role = `Employee`;
  const employee = new Employee(
    `Samwise Gamgee`,
    1350,
    `iheartpohtaytohs@gondor.com`
  );
  expect(employee.getRole()).toBe(role);
});
