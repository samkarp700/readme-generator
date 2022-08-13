// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utilities/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    //Title of Project
        {
            type: 'input', 
            name: 'title', 
            message: 'What is the Title of your Project? (Required)', 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        }, 
        //beginning of short description questions
        {
            type: 'input', 
            name: 'what', 
            message: 'What was the motivation behind building your project?'
        }, 

        {
            type: 'input', 
            name: 'why', 
            message: 'Why did you decide to build this application?'
        }, 
        {
            type: 'input', 
            name: 'solve', 
            message: 'What problem does your application solve?'
        }, 
        {
            type: 'input', 
            name: 'learn', 
            message: 'What did you learn from building this application?'
        }, 
        //Installation question
        {
            type: 'input', 
            name: 'installation', 
            message: 'What are the installation steps to use your application?'
        }, 
        //usage question
        {
            type: 'input', 
            name: 'usage', 
            message: 'Please instruct on how to use your application.'
        }, 

        //language list
        {
            type: 'checkbox', 
            name: 'languages', 
            message: 'What did you build this project with? (check all that apply)', 
            choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'JQuery', 'Bootstrap', 'Node']
        },
        //credits and collabs
        {
            type: 'input', 
            name: 'credits', 
            message: 'Please list any collaborators or 3rd-party assets used in this application. '
        }, 
        //license section
        {
            type:'list', 
            name: 'license', 
            message: 'Please select a license for your project.',
            choices: [
                {
                    name: 'GNU', 
                    value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                }, 
                {
                    name: 'MIT', 
                    value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

                }, 
                {
                    name:'Apache', 
                    value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                }, 
                {
                    name:'WTFPL',
                    value: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
                }]
        },
                // questions section
                {
                    type: 'input', 
                    name: 'GitHub', 
                    message: 'Please put the link to your GitHub (Required)', 
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please put the link to your Github!');
                            return false;
                        }
                    }
                }, 
                {
                    type: 'input', 
                    name: 'email', 
                    message: 'What is your email? (Required)', 
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Please put your email address');
                            return false;
                        }
                    }
                }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if(err) {
            return console.log(err);
        } else {
            console.log('Please review your README file.');
        };
    });
};

// TODO: Create a function to initialize app (instead of prompt in question array)
function init() {
    inquirer.prompt(questions)
    .then(function(devInput) {
        console.log(devInput)
        writeToFile('README.md', generateMarkdown(devInput));
    });
};

// Function call to initialize app
init();




    