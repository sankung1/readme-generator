// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  # ${data.title}
  ## Table of Contents
  * [Description](#description) 
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license) 
  * [Contributors](#contributors) 
  * [Questions](#questions)
  *[My Profile](#link)
  
  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Questions
  My Github user name is ${data.questions}

  ## My Profile
  ${data.link}

`;
}

module.exports = generateMarkdown;