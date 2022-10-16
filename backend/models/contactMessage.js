// MONGOOSE DEFINITIONS

const mongoose = require('mongoose')


const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
  .connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: Date,
})

// FORMATING THE OBJECTS RECEIVED FROM MONGOOSE
messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Message', messageSchema)