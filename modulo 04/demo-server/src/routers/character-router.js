const express = require('express');

const getCharacters = require('../controllers/characters/get-characters');
const getCharactersById = require('../controllers/characters/get-characters-by-id');
const createCharacter = require('../controllers/characters/create-character');
const updateCharacter = require('../controllers/characters/update-character');
const deleteCharacter = require('../controllers/characters/delete-character');

const characterRouter = express.Router();

characterRouter.get('/', getCharacters);
characterRouter.get('/:id', getCharactersById);
characterRouter.post('/', createCharacter);
characterRouter.put('/:id', updateCharacter);
characterRouter.delete('/:id', deleteCharacter);

module.exports = characterRouter;
