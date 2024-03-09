const reactRecommended = require('eslint-plugin-react/configs/recommended');
const markdown = require("eslint-plugin-markdown");
module.exports = {
    ...markdown.configs.recommended,
    ...reactRecommended
}