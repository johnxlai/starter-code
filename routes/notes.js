const notes = require('express').Router();
const dbNotes = require('../db/db.json');
//unique id npm package
const uniqid = require('uniqid');

// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

//Get Routes for retrieving all notes
notes.get('/', (req, res) => {
  res.status(200).json(dbNotes);
  // console.log(dbNotes);
  // return res.json(dbNotes);
});

//Post route for a new note
notes.post('/', (req, res) => {
  //Grab details from existing notes
  console.info(`${req.method} request received to add a note`);
  const { title, text, uniqidId = 0 } = req.body;

  //Check if anything is in body and title text is available
  if (req.body && title && text) {
    const newNote = {
      title,
      text,
      uniqidId: uniqid(),
    };
    // Log the response body to the console
    const response = {
      status: 'success',
      body: newNote,
    };
    console.log(response);
    res.json(`Review for has been added!`);
    // res.status(201).json(response);
  } else {
    res.status(500).json(`Error in posting notes`);
  }
  // Log the response body to the console
  // console.log(req.body);
});

//post route to add new note to data
// notes.post('/', (req, res) => {});

module.exports = notes;
