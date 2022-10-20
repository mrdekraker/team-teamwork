const Intern = require(`../lib/Intern`);

test(`Test school create`, () => {
  const school = `School of Hard Knocks`;
  const intern = new Intern(
    `Shawn Corey Carter`,
    12469,
    `blueivey@cds.com`,
    school
  );
  expect(intern.school).toBe(school);
});

test(`Test Role`, () => {
  const role = `Intern`;
  const intern = new Intern(
    `Shawn Corey Carter`,
    12469,
    `blueivey@cds.com`,
    `School of Hard Knocks`
  );
  expect(intern.getRole()).toBe(role);
});
