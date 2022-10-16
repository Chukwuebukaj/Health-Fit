const message = require('./message')
const subscription = require('./subscription')


const containerService = () => {
  return {
    messageService: message(),
    subscriptionService: subscription()
  }
}

module.exports = containerService