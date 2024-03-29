const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "./src/**/*.{js,jsx,ts,tsx}": ["prettier --write", buildEslintCommand],
  "./src/**/*.css": ["prettier --write"],
  "./**/*.{json,md}": ["prettier --write"],  
};
