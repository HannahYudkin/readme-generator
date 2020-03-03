var inquirer = require("inquirer");
const axios = require("axios");
const api = require("./api");
var fs = require("fs");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "title",
    message: "Where is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this project?"
  },
  {
    type: "input",
    name: "license",
    message: "What is this project licensed under?"
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?"
  },
  {
    type: "input",
    name: "tests",
    message: "What are the tests associated with this project?"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("README.md created sucessfully!");
  });
}

function init() {
  inquirer.prompt(questions).then(answers => {
    api.getUser(`${answers.username}`).then(function(response) {
      let gitEmail = response.data.email;
      let gitImage = response.data.avatar_url;
      const profileString = `# ${answers.title}
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

${answers.description}

## Table of Contents

* [Installation](#Installation) 
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation

${answers.installation}


## Usage

${answers.usage}


## License

${answers.license}


## Contributors

${answers.contribution}

## Tests

${answers.tests}

## Questions 

Contact me at ${gitEmail}.
![Image](${gitImage})
`;

      writeToFile("README.md", profileString);
    });
  });
}

//https://api.github.com/users/hannahyudkin
//https://api.github.com/users/hannahyudkin/repos

init();
//console.log(api.getUser)
