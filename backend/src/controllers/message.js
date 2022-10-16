

const containerService = require('../services/index')

const messageController = (containerService) => {

  const getHandler = (request, response) => {

    const result = containerService

    Message.find({}).then( message => {
      response.json(message)
    })
    .catch(error => {
      console.log(error)
    })

  }


  const postHandler = (request, response) => {
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
  }


  return {
    getHandler, postHandler
  }
  
}

module.exports = messageController