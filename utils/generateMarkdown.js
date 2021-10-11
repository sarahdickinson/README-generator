const fs = require('fs');
const badge = {
    Apache: 'https://img.shields.io/badge/LICENSE-APACHE-green',
    GNU: 'https://img.shields.io/badge/LICENSE-GNU-yellow',
    MIT: 'https://img.shields.io/badge/LICENSE-MIT-blue'
};
const licenseLink = {
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    GNU: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    MIT: 'https://opensource.org/licenses/MIT'
};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === false) {
        return license("")
    } else {
        return license.badge
    }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === false) {
        return license("")
    } else {
        return license.licenseLink
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === false) {
        return license("")
    } else {
        return `
        Licensed under the [${license.badge}](${license.link}) license.
        `
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.project}

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
    ${renderLicenseSection(license)}

    ## Questions
    For additional information, visit my [Github](${data.github}) or reach out through [email](mailto::${data.email}).
`;
}

module.exports = generateMarkdown;