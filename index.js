require('dotenv').config()
const express = require('express')
const placesRoutes = require('./controllers/places')
const app = express()
// Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Routes
app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})
const PORT = process.env.PORT
app.listen(PORT)
