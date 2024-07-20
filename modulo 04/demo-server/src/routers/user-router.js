const express = require('express');

const getUsers = require('../controllers/user/get-users');
const getUsersByid = require('../controllers/user/get-users-by-id');
const editUser = require('../controllers/user/edit-user');
const deleteUser = require('../controllers/user/delete-user');

const userRouter = express.Router()

// Browse Users
userRouter.get('/users', getUsers);

// Read User
userRouter.get('/users/:id', getUsersByid);

// Edit User
userRouter.put('/users/:id', editUser);

// Delete User
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;