const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 3500

axios.defaults.baseUrl = process.env.GOOGLE_MAPS_API_URL

app.use(bodyParser.json())
app.use(cors())

app.get('/api/address/:address', async (req, res) => {
  try {
    if (
      req.params.address === null ||
      req.params.address === '' ||
      req.params.address === undefined
    ) {
      res.status(400).send('Bad Request')
      return
    }

    let data = await axios.get(
      'place/autocomplete/json' +
        '?input=' +
        req.params.address +
        '&types=address' +
        '&key=' +
        process.env.GOOGLE_MAPS_API_KEY
    )

    res.status(200).json(data.data.predictions)
  } catch (error) {
    console.log(error)
  }
})

app.all('*', (req, res) => {
  res.status(404)

  if (req.accepts('json')) {
    res.json({ error: '404 Not Found' })
  } else {
    res.type('text').send('404 Not Found')
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
