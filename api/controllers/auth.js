const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
  try {
    const user = await User(req.body)
    await user.save()
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
  } catch (error) {
    res.status(500).json({'msg': 'failed'})
  }
}

const login = async (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    throw new BadRequestError('Please provide name and password')
  }
  const user = await User.findOne({ name })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = {
  register,
  login,
}
