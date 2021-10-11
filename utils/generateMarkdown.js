const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = {
        Apache: 'https://img.shields.io/badge/LICENSE-APACHE-green',
        GNU: 'https://img.shields.io/badge/LICENSE-GNU-yellow',
        MIT: 'https://img.shields.io/badge/LICENSE-MIT-blue'
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = {
        Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
        GNU: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
        MIT: 'https://opensource.org/licenses/MIT'
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;