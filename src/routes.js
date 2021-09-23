const express = require('express');
const routes = express.Router();

const NoteController = require('./controllers/NoteController');

//Anotações em geral.
routes.post('/notes', NoteController.create);
routes.get('/notes', NoteController.read);
routes.put('/notes/:id', NoteController.update);
routes.delete('/notes/:id', NoteController.delete);

module.exports = routes;