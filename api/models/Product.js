const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  price: {
    type: String,
    required: [true, 'Please provide price'],
  },
  priceReal: {
    type: Number,
    required: [true, 'Please provide priceReal'],
  },
  pastPrice: {
    type: String,
    required: [true, 'Please provide pastPrice'],
  },
  trademark: {
    type: String,
    required: [true, 'Please provide trademark'],
  },
  CPU: {
    type: String,
    required: [true, 'Please provide CPU'],
  },
  CPUCompact: {
    type: String,
    required: [true, 'Please provide CPUCompact'],
  },
  Ram: {
    type: String,
    required: [true, 'Please provide Ram'],
  },
  RamCompact: {
    type: String,
    required: [true, 'Please provide RamCompact'],
  },
  memoryCompact: {
    type: String,
    required: [true, 'Please provide memoryCompact'],
  },
  Card: {
    type: String,
    required: [true, 'Please provide Card'],
  },
  screen: {
    type: String,
    required: [true, 'Please provide screen'],
  },
  screenCompact: {
    type: String,
    required: [true, 'Please provide screenCompact'],
  },
  status: {
    type: Boolean,
    required: [true, 'Please provide status'],
  },
  linkImg: {
    type: String,
    required: [true, 'Please provide linkImg'],
  }
})


module.exports = mongoose.model('Product', ProductSchema)
