const messageController = require('./controllers/message')
const subscriptionController = require('./controllers/subscription')
const serviceContainer = require('./services/index')

const messageHandler = messageController(serviceContainer)
const subscriptionHandler = subscriptionController(serviceContainer)

const routeHandler = (server) => {
  
  server.get('/api/messages', (request, response) => messageHandler.getHandler)
  server.get('/api/subscribers', (request, response)=> subscriptionHandler.getHandler)

  server.post('/api/messages',  (request, response) => messageHandler.postHandler)
  server.post('/api/subscribers', (request, response) => subscriptionHandler.postHandler)

  return server
}

module.exports = routeHandler