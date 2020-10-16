// function to generate markdown for README
function generateMarkdown(data) {
  return `
[![forthebadge](https: //forthebadge.com/images/badges/license-${data.license}.svg)](https://forthebadge.com)
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