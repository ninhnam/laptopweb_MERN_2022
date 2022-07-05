/** @format */

const Sort = require("../models/Sort");

const getSort = async (req, res) => {
  try {
    const sort = await Sort.find({idUser: req.user.userId});
    res.status(200).json({msg: "success", data: sort});
  } catch (error) {
    res.status(500).json({msg: "Get product Fail"});
  }
};

const addSort = async (req, res) => {
  try {
    const sort = await new Sort({
      ...req.body,
      idUser: req.user.userId,
      quantity: 1,
      idProduct: req.body._id,
      _id:''
    });
    console.log(sort);
    await sort.save();
    const sortProduct = await Sort.find({idUser: req.user.userId});
    res.status(200).json({msg: "create success", data: sortProduct});
  } catch {
    res.status(500).json({msg: "Create product Fail"});
  }
};

const updateSort = async (req, res) => {
  try {
    const {idSort} = req.params;
    await Sort.findByIdAndUpdate({_id: idSort}, req.body, {
      new: true,
      runValidators: true,
    });
    const sortProduct = await Sort.find({idUser: req.user.userId});
    res.status(200).json({msg: "update success", data: sortProduct});
  } catch (error) {
    res.status(500).json({msg: "Update product Fail"});
  }
};

const deleteSort = async (req, res) => {
  try {
    const {idSort} = req.params;
    const product = await Sort.findOneAndDelete({_id: idSort});
    if (!product) {
      return res.status(404).json({msg: `No product with ID: ${idSort}`});
    }
    const sortProduct = await Sort.find({idUser: req.user.userId});
    res.status(200).json({msg: "delete success", data: sortProduct});
  } catch (error) {
    res.status(500).json({msg: "Delete product Fail"});
  }
};

module.exports = {
  getSort,
  addSort,
  updateSort,
  deleteSort,
};
