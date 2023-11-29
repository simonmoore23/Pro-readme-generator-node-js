// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(./generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide - What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
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
        type: "checkbox",
        name: "licence",
        message: "Please select a licence for this project.",
        choices: ["MIT", "Apace 2.0", "GNU v3.0", "BSD 2-Clause", "BSD 3-Clause", "Boost 1.0", "Creative Commons 1.0", "Eclipse 2.0", "none"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
