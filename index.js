const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("<h3>This Home page</h3>")
})

app.get('/about', (req,res) => {
    res.send("<h3>This about page</h3>")
})

app.get('*' , (req,res) => {
    res.send("<h2>404 Error Page not found</h2>")
})

app.listen(port , () => {
    console.log("server listening on port" , port);
})