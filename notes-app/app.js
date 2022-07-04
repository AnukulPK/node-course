const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');

// const msg = getNotes();

// console.log(msg);
// console.log(chalk.bold.inverse.blue('Success after nodemon!'));

// console.log(process.argv[2]);
// const command = process.argv[2];

// if (command.toLowerCase() === 'add') {
//   console.log('Adding Note');
// } else if (command.toLowerCase() === 'remove') {
//   console.log('Removing note');
// }

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing a note');
  },
});

//Create a read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: () => {
    console.log('Reading a note');
  },
});

//Create a list command
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler: () => {
    console.log('Listing out all notes');
  },
});

//add, remove , read , list

console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();
