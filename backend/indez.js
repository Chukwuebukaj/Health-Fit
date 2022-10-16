const routeHandlers = require('./src/routehandler')

require('dotenv').config() //environment variable

const express = require('express');
const app = express();

app.use(express.json());
//JSON parser for POST requests

app.use(express.static('build')) //Displays React FrontENd

// const cors = require('cors')
// app.use(cors())



app(routeHandlers);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})