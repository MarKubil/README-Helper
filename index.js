const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'README file test',
    name: 'readme'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('File Created!'))
}

// function to initialize program
function init() {
  // Asks user questions for README inputs.
  inquirer.prompt([...questions])
    // response sends to generateMarkdown then received markdown send to writeToFile.
    .then((response) => writeToFile(response.readme, generateMarkdown(response)));
}

// function call to initialize program
init();


