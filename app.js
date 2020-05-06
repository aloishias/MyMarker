const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors')


const userRoutes = require('./src/routes/User.js')
const artworkRoutes = require('./src/routes/Artwork.js')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use('/', userRoutes)
app.use('/', artworkRoutes)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})