const lol = require('dotenv').config()
const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT;  
const app = express()
const sequelize = require('./db')
const models = require('./models/models')

app.use(cors());
app.use(express.json())
//app.options('*', cors());


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('start', PORT))
    } catch(e) {
        console.log(e)
    }
}

start()

