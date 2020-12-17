const getNotes = require('./notes.js')
const fs = require('fs')

const notes = getNotes()

fs.writeFileSync('notes.txt', notes)

console.log(notes)