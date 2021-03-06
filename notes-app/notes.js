const chalk = require('chalk');
const fs = require('fs');

// const getNotes = () => {
//   return 'Your Notes...';
// };

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const finalNotes = notes.filter((note) => note.title !== title);
  if (notes.length > finalNotes.length) {
    console.log(chalk.green.inverse('Note Removed!'));
    saveNotes(finalNotes);
  } else {
    console.log(chalk.red.inverse('No Note found'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToBeFound = notes.find((note) => note.title === title);
  if (noteToBeFound) {
    console.log(chalk.green.inverse(noteToBeFound.title));
    console.log(noteToBeFound.body);
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Yor Notes'));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  // getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
};
