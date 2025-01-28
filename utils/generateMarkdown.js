// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // function to grab a license
  if (license === "MIT") {
    return `![Static Badge](https//:img.shields.io/badge/License-MIT-brightgreen)`
  } else if (license === "Apache") {
    return `![Static Badge](https//:img.shields.io/badge/License-Apache-brightgreen)`
  } else if (license === "GNU") {
    return `![Static Badge](https//:img.shields.io/badge/License-GNU-brightgreen)`
  } else if (license === "none") {
    return ("none")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  } else if (license === "Apache") {
    return "This project is licensed under the Apache license.";
  } else if (license === "GNU") {
    return "This project is licensed under the GPL license.";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me at ${data.email}. You can also find more of my work at [${data.github}](XXXXXXXXXXXXXXXXXXX${data.github}/).
`;
}

export default generateMarkdown;
