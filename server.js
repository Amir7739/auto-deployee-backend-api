const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoute')

require('dotenv').config();

const app = express();

connectDB()

app.use(express.json())

app.use('/api/users',userRoutes)

app.use('/api/products', (req, res) => {
    return res.status(200).json({
        message: "This is new feature"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))