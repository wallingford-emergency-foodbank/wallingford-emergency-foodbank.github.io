const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_site/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
