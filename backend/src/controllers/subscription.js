
const containerService = require('../services/index')

const subscriptionController = () => {

  const getHandler = (request, response) => {
    const result = containerService.subscriptionService()
    return result
  }

  const postHandler = (request, response) => {

  }

  return {
    getHandler, postHandler
  }

}

module.exports = subscriptionController