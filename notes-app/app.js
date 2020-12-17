const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Abe.')

// Challenge: Append a message to notes.txt
fs.appendFileSync('notes.txt', '\nI am almost 25-years-old.')
