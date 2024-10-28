require('dotenv').config()
const express = require('express')
const app = express()
const connDB = require('./config/connDB')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000

// connection to database
connDB()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use('/', require('./routes/root'))
app.use('/graduates', require('./routes/graduate.route'))
app.use('/undergraduates', require('./routes/undergraduate.route'))
app.use('/kap', require('./routes/kap.route'))
app.use('/eap', require('./routes/eap.route'))

app.all("*", (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if (req.accepts('json')){
        res.json({message : "404 not found"})
    }
    else {
        res.type('txt').send('404 not found')
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`)
})