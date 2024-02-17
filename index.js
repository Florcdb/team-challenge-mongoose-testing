const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config.js');
const routes = require('./routes/posts');


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)



dbConnection()

app.listen(PORT,()=>{
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`);
})

module.exports = app;
