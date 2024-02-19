const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {    console.log('connected to MongoDB')  })  .catch((error) => {    console.log('error connecting to MongoDB:', error.message)  })
  const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    autor: String,
    date: {
        type: String,
        default: Date.now,
        set: function(v) {
            const date = v instanceof Date ? v : new Date(v);
            const formattedDate = `${date.getDate()}-${'0' + (date.getMonth() + 1)}-${date.getFullYear()}`;
            return formattedDate;
        }
    },
    important: Boolean
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(),
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;