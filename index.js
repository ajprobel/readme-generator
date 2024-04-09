// Includes needed packages
const inquirer = require('inquirer');
const fs = require('fs');

// Defining questions for use in inquirer
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List installation instruction (if any)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please detail usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List details for user contribution',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please detail the credit for the project',
        name: 'credit',
    },
    {
        type: 'input',
        message: 'List all testing information',
        name: 'test',
    },
    {
        type: 'list',
        message: 'List all testing information',
        choices: ['No_License', 'MIT', 'GNU_GPLv3', 'ISC', 'Apache_License_2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please type your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
];

// Defines function to write a file with data input
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Input Received!'))
}

// Defines function when index.js is run. Uses prompt questions and passes input into string literal for README.md
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            const { title, description, installation, usage, contribution, credit, test, license, username, email } = response;
            const readMeText = `
# ${title}

![license_badge](https://img.shields.io/badge/license-${license}-green)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credit}

## License

License: ${license}

## How to Contribute

${contribution}

## Tests

${test}

## Questions

For questions/inquiries, please direct them to:

[GitHub Profile](https://github.com/${username})

Email: ${email}

`;
            writeToFile("newREADME.md", readMeText);
        })
}

// Function call to initialize app
init();
