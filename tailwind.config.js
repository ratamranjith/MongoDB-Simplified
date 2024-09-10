/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs', // If you are using Handlebars
    './public/**/*.html', // If there are any static HTML files in the public folder
    './public/**/*.js', // If you are using JavaScript
  ],
  theme: {}
}