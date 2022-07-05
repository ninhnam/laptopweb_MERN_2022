const Product = require('../models/Product')

const getProduct = async (req, res) => {
  const product = await Product.find({})
  res.status(200).json(product)
} 

module.exports = {getProduct}