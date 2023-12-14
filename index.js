const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())


app.post('/origin-destination', async (req, res) => {
    try {
        const response = await axios.post('https://apis.tollguru.com/toll/v2/origin-destination-waypoints',
            req.body,
            {
                headers: {
                    'x-api-key': 'jhPLDm64pPQtBTQnmMbt3NrMpQh2ngBg',
                    'Content-Type': 'application/json',
                },
            })
        res.status(200).json({
            success: true,
            data: response.data,
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

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
