import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import movieRouter from './routers/movies'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express()
const port = 8080

// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routing
app.get('/', function (req, res) {
    // const html = fs.readFileSync(join(__dirname, '/pages/home.html'), 'utf-8')
    // res.send(html)
    res.end(__dirname)
})
// Static
app.use(express.static('src/public'))

// Middleware
app.use("/movies", movieRouter)

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
})