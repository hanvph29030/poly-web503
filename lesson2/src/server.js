//const express = require('express');
//const fs = require('fs');
//const bodyParser = require('body-parser');
import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser';
import routerMovies from './routers/movies';
import routerUpload from './routers/upload'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Static
app.use(express.static('./public'))

//Routing
app.get('/', function (req, res) {
    //console.log(req.url);
    //const home = fs.readFileSync('./pages/home.html', 'utf-8')
    //res.send(home)
    //res.sendFile(__dirname + './pages/home.html')
    res.end(__dirname)
})



//Middleware
//app.use("/movies", routerMovies)

// Router
app.use("/movies", routerMovies)
app.use("/upload", routerUpload)

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
})