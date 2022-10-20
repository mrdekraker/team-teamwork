// Define constants
const Manager = require(`./lib/Manager.js`);
const Engineer = require(`./lib/Engineer.js`);
const Intern = require(`./lib/Intern.js`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`fs`);
const OUTPUT_DIR = path.resolve(__dirname, `dist`);
const generatePath = path.join(OUTPUT_DIR, `myTeam.html`);
const generateTeam = require(`./src/generateTeam.js`);

console.log(`Welcome to the Team Profile Generator!`);

// Set up Team Array
const teamArr = [];

// Run buildTeam function to create the team
function runApp() {
  // Function to create the team members, Manager, Engineer, Intern
  function buildTeam() {
    inquirer
      .prompt([
        {
          type: `list`,
          message: `Which role would you like to add next to the team?`,
          name: `role`,
          choices: [
            `Manager`,
            `Engineer`,
            `Intern`,
            `No more team members are required.`,
          ],
        },
      ])
      .then((userResponse) => {
        switch (userResponse.role) {
          case `Manager`:
            addManager();
            break;
          case `Engineer`:
            addEngineer();
            break;
          case `Intern`:
            addIntern();
            break;
          default:
            buildTeamHTML();
        }
      });
  }

  // Function to add Manager to the team
  function addManager() {
    inquirer
      .prompt([
        {
          type: `input`,
          name: `name`,
          message: `What is the manager's name?`,
        },
        {
          type: `input`,
          name: `id`,
          message: `What is the manager's employee ID number?`,
        },
        {
          type: `input`,
          name: `email`,
          message: `What is the manager's email address?`,
        },
        {
          type: `input`,
          name: `officeNumber`,
          message: `What is the manager's office number?`,
        },
      ])
      .then((managerResponse) => {
        const manager = new Manager(
          managerResponse.name,
          managerResponse.id,
          managerResponse.email,
          managerResponse.officeNumber
        );
        teamArr.push(manager);
        buildTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: `input`,
          name: `name`,
          message: `What is the engineer's name?`,
        },
        {
          type: `input`,
          name: `id`,
          message: `What is the engineer's employee ID number?`,
        },
        {
          type: `input`,
          name: `email`,
          message: `What is the engineer's email address?`,
        },
        {
          type: `input`,
          name: `github`,
          message: `What is the engineer's GitHub username?`,
        },
      ])
      .then((engineerResponse) => {
        const engineer = new Engineer(
          engineerResponse.name,
          engineerResponse.id,
          engineerResponse.email,
          engineerResponse.github
        );
        teamArr.push(engineer);
        buildTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: `input`,
          name: `name`,
          message: `What is the intern's name?`,
        },
        {
          type: `input`,
          name: `id`,
          message: `What is the intern's employee ID number?`,
        },
        {
          type: `input`,
          name: `email`,
          message: `What is the intern's email address?`,
        },
        {
          type: `input`,
          name: `school`,
          message: `What school does the intern attend?`,
        },
      ])
      .then((internResponse) => {
        const intern = new Intern(
          internResponse.name,
          internResponse.id,
          internResponse.email,
          internResponse.school
        );
        teamArr.push(intern);
        buildTeam();
      });
  }

  function buildTeamHTML() {
    console.log(`Generating Team Profile...`);
    fs.writeFileSync(generatePath, generateTeam(teamArr), `UTF-8`);
    console.log(`Team Profile Generated!`);
  }
  buildTeam();
}

runApp();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
