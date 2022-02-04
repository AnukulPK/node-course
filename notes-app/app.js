const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Anukul');

fs.appendFileSync('notes.txt', ' \n Appeneded message');
