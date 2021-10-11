const fs = require('fs');

// const licenseLink = {
//     Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
//     GNU: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
//     MIT: 'https://opensource.org/licenses/MIT'
// };



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (license.license === false) {
//         return ("")
//     } else {
//         return "https://img.shields.io/badge/LICENSE-" +
//             "${data.license}" +
//             "-blue"
//     }

// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license.license === false) {
//         return ("")
//     } else {
//         return license.licenselicenseLink
//     }
// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license.license === false) {
//         return ("")
//     } else {
//         return `
//         Licensed under the [${datas.license}](${license.link}) license.
//         `
//     }
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.project}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## License
    Licensed under the [${data.license}] license.

    ## Questions
    For additional information, visit my [Github](https://github.com/${data.github}) or reach out through [email](<${data.email}>).
`;
}

module.exports = generateMarkdown;