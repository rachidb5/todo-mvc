const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
     useNewUrlParser: true, 
     useUnifiedTopology: true,
      useFindAndModify: false 
    })

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


  app.listen(process.env.PORT || 3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  
});