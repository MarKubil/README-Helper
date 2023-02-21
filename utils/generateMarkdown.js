
// function to generate markdown for README
function generateMarkdown(data) {
// Variable for 5 licenses
  const license = {
MIT: `[MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`,
Apache2: `[Apache License 2.0](https://github.com/apache/.github/blob/main/LICENSE)`,
GNUv3: `[GNU GENERAL PUBLIC LICENSE v3](https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt)`,
MozzilaPub2: `[Mozilla Public License 2.0](https://github.com/mozilla/openbadges-bakery/blob/master/LICENSE-MPL-2.0)`,
EclipsePub2: `[Eclipse Public License version 2.0](https://github.com/apache/iotdb/blob/master/licenses/Eclipse%20Public%20License%20version%202.0%20(EPL-2.0))`,
}
// Checks user selected license
let licenseBadge;
let licenseText;
switch (data.license) {
    case 'MIT':
        licenseBadge = 'https://img.shields.io/badge/license-MIT-green.svg';
        licenseText = license.MIT;
        break;
    case 'Apache License 2.0':
        licenseBadge = 'https://img.shields.io/badge/license-Apache%202.0-green.svg';
        licenseText = license.Apache2;
        break;
    case 'GNU General Public License v3.0':
        licenseBadge = 'https://img.shields.io/badge/license-GNU%20v3.0-green.svg';
        licenseText = license.GNUv3;
        break;
    case 'Eclipse Public License 2.0':
        licenseBadge = 'https://img.shields.io/badge/license-Eclipse%20Public%202.0-green.svg';
        licenseText = license.EclipsePub2;
        break;
    case 'Mozilla Public License 2.0':
        licenseBadge = 'https://img.shields.io/badge/license-Mozilla%20Public%202.0-green.svg';
        licenseText = license.MozzilaPub2;
};
let image = "";
    if (data.includeImage) {
        image = `### Project image:\n![image](${data.imageURL})`;
    };
let video = "";
let videotable = "";
    if (data.video) {
        video = `## Video\n![video](${data.videoURL})`;
        videotable = `* [Video](#Video)`
    }
let credits = "";
let creditsTable = "";
    if (data.creditsConfirm) {
        credits = `## Credits\n${data.credits}`;
        creditsTable = `* [Credits](#Credits)`
    }
let test = "";
let testTable = "";
    if (data.testConfirm) {
        test = `## Tests\n${data.test}`
        testTable = `* [Tests](#Tests)`
    }
  return `# ${data.title}

![GitHub License](${licenseBadge})

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Questions](#questions)

${videotable}

${creditsTable}

${testTable}

## Installation

To run tests, run the following commands:\n
${data.installation}

## Usage

${data.usage}

${image}

${video}

${credits}

${test}

## License

${licenseText}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`}

module.exports = generateMarkdown;


