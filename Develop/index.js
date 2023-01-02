// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: 'What is the name of your project?',
    name: "Title"
},
{
    type: 'input',
    message: 'What is your Github name?',
    name: 'Username'
},
{
    type: 'input',
    message: 'What is your Project about?',
    name: 'Description'
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},
{
    type: 'input',
    message: 'What does the user need to install?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'How does the user use this Repository?',
    name: 'Usage'
},
{
    type: 'input',
    message: 'What contributed to this project?',
    name: 'Contribute'
},
{
    type: 'input',
    message: 'What is need to run this command test?',
    name: 'Test'
},
{
    type: 'input',
    message: 'What type of lisense is being used for this usage?',
    name: 'License'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponse) => {
        console.log('user responses = ', userResponse);
        writeToFile('README.md', generateMarkdown({ ...userResponse}));
      });


}

// Function call to initialize app
init();
