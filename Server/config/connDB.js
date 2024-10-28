require('dotenv').config()
const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const connDB = asyncHandler(async() => {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected to database successfully")
})

module.exports = connDB