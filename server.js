const express = require("express");

//MIDDLEWARE WILL BE REQUIRED HERE//
const cors = require('cors')
const logger = require('morgan')

const catsRouter = require('./routes/cats')
const dogsRouter = require('./routes/dogs')

const PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE PIPELINE
//MIddleware will be used here//
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//Routes will go here
app.get('/', function (req, res) {
    res.json({msg: 'Server running'})
})

app.use('/cats', catsRouter)
app.use('/dogs', dogsRouter)

app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`)
});
