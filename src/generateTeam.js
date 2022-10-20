const generateTeam = (team) => {
  // create manager card
  const generateManager = (manager) => `
    <div class="card employee-card mx-3">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;

  // create engineer card
  const generateEngineer = (engineer) => `
    <div class="card employee-card mx-3">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `;

  // create intern card
  const generateIntern = (intern) => `
    <div class="card employee-card mx-3">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;

  // create array of cards
  const html = [];

  // push manager card to array
  html.push(
    team
      .filter((employee) => employee.getRole() === `Manager`)
      .map((manager) => generateManager(manager))
  );

  // push engineer cards to array
  html.push(
    team
      .filter((employee) => employee.getRole() === `Engineer`)
      .map((engineer) => generateEngineer(engineer))
      .join(``)
  );

  // push intern cards to array
  html.push(
    team
      .filter((employee) => employee.getRole() === `Intern`)
      .map((intern) => generateIntern(intern))
      .join(``)
  );

  // return array of cards
  return html.join(``);
};

// export function to generate entire page
module.exports = (team) => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
      </head>

      <body>
        <div class="container-fluid banner">
          <div class="row py-5 jumbotron">
            <div class="col-12 mx-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center my-3">
              ${generateTeam(team)}
            </div>
          </div>
        </div>
        <style>
          .banner {
            background: #23282a;
            color: #fff;
          }
          .jumbotron: {
            width: 100vw;
          }
          .card {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
          }
        </style>
      </body>
      </html>
    `;
