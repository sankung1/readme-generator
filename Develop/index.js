const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your README?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your README file?"     
    },
    {
        type: "input",
        name: "installation",
        message: "How is this app installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this app used?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "How do you want your app to be licensed?",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "Unlicensed"
        ]
        
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to this app?"
    },
    {
        type: "input",
        name: "tests",
        message: "Test your app"
    },
    {
        type: "input",
        name: "questions",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "link",
        message: "Link your Github profile here"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data, error =>{
        if(error){
            throw error;
            console.log("There's an unexpected error")
        }
    })
}

// function to initialize program
function init() {
   inquirer.prompt(questions).then(answers =>{
        const response = generateMarkDown(answers);
        writeToFile("./README.md", response);
    })
}

// function call to initialize program
init();
