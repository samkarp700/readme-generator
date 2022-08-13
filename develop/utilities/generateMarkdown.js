
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.what}
  ${data.why}
  ${data.solve}
  ${data.learn}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ### Credits
  ${data.credits}
  ### License
  ${data.license}
`;
}

module.exports = generateMarkdown;
