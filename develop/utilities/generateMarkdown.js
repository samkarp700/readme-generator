//removed license functions as prompt pulls image of license
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ### Motivation
  ${data.what}
  ### Reason for building this application
  ${data.why}
  ### Problems Solved
  ${data.solve}
  ### Lessons learned
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
