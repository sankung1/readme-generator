const fs = require("fs");
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const utils = require("./utils");

const writeFileAsync = utils.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your README?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of your README file?"     
    }
    {
        type: "input",
        name: "Table of Contents",
        message: "Enter your info for your table of contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "How is this app installed?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How is this app used?"
    },
    {
        type: "checkbox",
        name: "License",
        message: "How do you want your app to be licensed?",
        Choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "The Unilicense",
            "Unlicensed"
        ]
        
    },
    {
        type: "input",
        name: "Contributing",
        message: "How are the contributors to this app?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Test your app"
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Link",
        message: "Link your Github profile here"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
