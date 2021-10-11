const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./writeFile');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }, {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
    },
    {
        type: 'checkbox',
        name: 'liscense',
        message: 'Liscense:',
        choices: []
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'confirm',
        name: 'create',
        message: 'Would you like to create README.md?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
init()
    .then(promptProject)
    .then(generateMarkdown)

// Function call to initialize app
init();