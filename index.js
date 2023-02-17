const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: `What's your repository username?\nAnswer: `,
    name: 'username'
  },
  {
    type: 'input',
    message: `What is your project title?\nAnswer:`,
    name: 'title'
  },
  {
    type: 'input',
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    What was your motivation?
    Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    What problem does it solve?
    What did you learn?\nAnswer:`,
    name: 'description'
  },
  {
    type: 'list',
    message: `Do you want input picture?`,
    choices: ['Yes', 'No'],
    name: 'picture',
  }
];

// function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", data, (err) => err ? console.error(err) : console.log('File Created!'))
}

// function to initialize program
function init() {
  // Asks user questions for README inputs.
  inquirer.prompt([...questions])
    // response sends to generateMarkdown then received markdown send to writeToFile.
    .then((response) => writeToFile(generateMarkdown(response)));
}

// function call to initialize program
init();


