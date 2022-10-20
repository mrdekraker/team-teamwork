const Engineer = require(`../lib/Engineer`);

test(`Test Github create`, () => {
  const github = `mrdekraker;`;
  const engineer = new Engineer(
    `Mark DeKraker`,
    4289,
    `mrdekraker@gmail.com`,
    github
  );
  expect(engineer.github).toBe(github);
});

test(`Test Github will return github`, () => {
  const github = `mrdekraker`;
  const engineer = new Engineer(
    `Mark DeKraker`,
    4289,
    `mrdekraker@gmail.com`,
    github
  );
  expect(engineer.getGithub()).toBe(github);
});

test(`test role`, () => {
  const role = `Engineer`;
  const engineer = new Engineer(
    `Mark DeKraker`,
    4289,
    `mrdekraker@gmail.com`,
    `mrdekraker`
  );
  expect(engineer.getRole()).toBe(role);
});
