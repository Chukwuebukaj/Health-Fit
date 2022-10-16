
require('dotenv').config() //environment variable

const express = require('express');
const app = express();

const Subscriber = require('./models/subscription')
const Message = require('./models/contactMessage')

app.use(express.json());
 //JSON parser for POST requests

app.use(express.static('build')) //Displays React FrontENd

 const cors = require('cors')
 app.use(cors())



 
app.get('/', (request, response) => {
  // console.log(request)
  response.send('<h1>team 5 Server</h1>')
})


// SUBSCRIPTION ROUTES

app.get('/api/subscribers', (request, response) => {
  Subscriber.find({}).then( subscribe => {
    response.json(subscribe)
  })
  .catch(error => {
    console.log(error)
  })
  
})

app.get('/api/subscribers/:id', (request, response) => {
  
  Subscriber.findById(request.params.id)
    .then(subscriber => {
      if (subscriber) {
        response.json(subscriber)
      }
      else {
        response.status(404).end()
      }
      })
    .catch(error => {
      console.log(error)
      response.status(400).send({error:'wrong id'})
    })

  
})

app.post('/api/subscribers', (request, response) => {
  const subscriber = request.body
  
  if(!subscriber.email){
    return response.status(400).json({
      error: "email missing"
    })
  }
  else if(!subscriber.name){
    return response.status(400).json({
      error: "name missing"
    })
  }

  const registered = new Subscriber({
    name: subscriber.name,
    email: subscriber.email,
    date: new Date()
  })

  registered.save().then(subscriber => {
    response.json(subscriber)
  })
 
})

// Contact Message Routes

app.get('/api/messages', (request, response) => {
  Message.find({}).then( message => {
    response.json(message)
  })
  .catch(error => {
    console.log(error)
  })
  
})

app.post('/api/messages', (request, response) => {
  const message = request.body
  
  if(!message.email){
    return response.status(400).json({
      error: "email missing"
    })
  }
  else if(!message.name){
    return response.status(400).json({
      error: "name missing"
    })
  }

  const savedMessage = new Message({
    name: message.name,
    email: message.email,
    message: message.message,
    date: new Date()
  })

  savedMessage.save().then(message => {
    response.json(message)
  })
 
})



// CALENDAR ROUTES

app.get('/api/calendar', (request, response) => {
  response.json(calendar)
})

// 


// Handling non-existent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})