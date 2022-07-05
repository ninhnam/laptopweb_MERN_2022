const mongoose = require('mongoose')

const SortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  idUser: {
    type: String,
    required: [true, 'Please provide id User'],
  },
  idProduct: {
    type: String,
    required: [true, 'Please provide id Product'],
  },
  linkImg: {
    type: String,
    required: [true, 'Please provide linkImg'],
  },
  price: {
    type: String,
    required: [true, 'Please provide price'],
  },
  priceReal: {
    type: Number,
    required: [true, 'Please provide price'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide quantity'],
  },
})


module.exports = mongoose.model('Sort', SortSchema)
