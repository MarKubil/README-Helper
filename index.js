const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: `What's your repository username?\nAnswer: `,
    name: 'username',
    validate: response => response.length > 0 ? true : 'Please enter valid username' 
  },
  {
    type: 'input',
    message: `What's your email address?\nAnswer: `,
    name: 'email',
    validate: response => response.length > 0 ? true : 'Please enter valid Email'
  },
  {
    type: 'list',
    message: `What license will you use?`,
    name: 'license',
    choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0']
  },
  {
    type: 'input',
    message: `What's your project title?\nAnswer: `,
    name: 'title',
    validate: response => response.length > 0 ? true : 'Please enter valid title'
  },
  {
    type: 'input',
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    What was your motivation?
    Why did you build this project?
    What problem does it solve?
    What did you learn?\nAnswer:`,
    name: 'description',
    validate: response => response.length > 0 ? true : 'Please enter description about your project'
  },
  {
    type: 'input',
    message: `What are the steps required to install your project?\nAnswer: `,
    name: 'installation',
    validate: response => response.length > 0 ? true : `Please provide installation instructions or N/A`
  },
  {
    type: 'input',
    message: `Provide instructions and examples for use\nAnswer: `,
    name: 'usage',
    validate: response => response.length > 0 ? true : `Please provide instructions`
  },
  {
    type: 'confirm',
    message: 'Do you want to include image of your project?\nAnswer: ',
    default: true,
    name: 'includeImage'
  },
  {
    when: confirmation => confirmation.includeImage,
    type: 'input',
    name: 'imageURL',
    message: `Please provie Path or link to you image.\nAnswer: `,
    validate: response => response.length > 0 ? true : 'Please provide valid path or link'
  },
  {
    type: 'confirm',
    message: 'Do you want to include Project Video?',
    name: 'video',
    default: true
  },
  {
    when: confirmation => confirmation.video,
    type: 'input',
    name: 'VideoURL',
    message: `Please provie Path or link to you video.\nAnswer: `,
    validate: response => response.length > 0 ? true : `Please provide valid path or link`
  },
  {
    type: 'input',
    message: `List your collaborators, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.\nAnswer: `,
    name: 'credits'
  },
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


