const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'license',
        message: 'License:',
        choices: [
            "Apache",
            "GNU",
            "MIT"
        ]
    }
];

// TODO: Create a function to write README file

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README created.'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers)
        })
        .then(writeToFile)
        .catch(err => {
            console.log(err);
        })
        // const data = inquirer.prompt(questions)
        //     .then(generateMarkdown)
        //     .then(writeToFile)
        //     .catch(err => { console.log(err); })
};

// Function call to initialize app
init();