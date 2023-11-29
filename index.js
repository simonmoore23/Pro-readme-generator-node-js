// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for this project?",
    },
    {
        type: "input",
        name: "buildReason",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "problemSolved",
        message: "What problem does this project solve?",
    },
    {
        type: "input",
        name: "learned",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples of use",
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any contributors. (include GitHub usernames)",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a licence for this project.",
        choices: ["MIT", "Apache 2.0", "GNU v3.0", "BSD 2-Clause", "BSD 3-Clause", "Boost 1.0", "Creative Commons 1.0", "Eclipse 2.0", "none"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const outputDir = path.join(process.cwd(), 'Output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(path.join(outputDir, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("User Responses:", answers);
        console.log("Creating Professional README.md...");
        writeToFile("README.md", generateMarkdown((answers)));
    });
}

// Function call to initialize app
init();
