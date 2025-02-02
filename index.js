// TODO: Include packages needed for this application
import inquirer from 'inquirer'; // used for creating interactive command-line interfaces
import fs from 'fs'; // file system module
import generateMarkdown from './utils/generateMarkdown.js'; // accesses custom module

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['MIT', 'Apache', 'GNU', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username:',
    },
])
// TODO: Create a function to write README file
    function writeTofile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeTofile('./README.md', markdown);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init(
    console.log('Welcome to the README generator! Please answer the following questions to generate your README file.')
);
