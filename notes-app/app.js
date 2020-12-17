const getNotes = require('./notes.js')
const chalk = require('chalk');

const notes = getNotes()
console.log(notes)

// Challenge: Use the chalk library in your project
console.log(chalk.inverse.blue.bold('Success!'));
