const express = require('express');
const route = express.Router();
const todoController = require('./controllers/todoController')

route.post('/register',todoController.register)
route.get('/user/:id',todoController.show)
route.delete('/delete/:id',todoController.delete)
route.put('/update/:id', todoController.update)

module.exports = route
