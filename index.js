const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())


// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server listening on ${process.env.PORT}`)
})
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
