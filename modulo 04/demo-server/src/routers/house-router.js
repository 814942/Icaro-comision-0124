const express = require('express');

const getHouses = require('../controllers/house/get-houses');
const getHousesById = require('../controllers/house/get-houses-by-id');
const createHouse = require('../controllers/house/create-house');
const updateHouse = require('../controllers/house/update-house');
const deleteHouse = require('../controllers/house/delete-house');

const houseRouter = express.Router();

houseRouter.get('/', getHouses);
houseRouter.get('/:id', getHousesById);
houseRouter.post('/', createHouse);
houseRouter.put('/:id', updateHouse);
houseRouter.delete('/:id', deleteHouse);

module.exports = houseRouter;
