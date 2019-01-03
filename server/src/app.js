console.log('Hello Node JS')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status', (req, res) => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  res.send({ message: 'Hello World!' })
})
app.listen(process.env.PORT || 8081)
