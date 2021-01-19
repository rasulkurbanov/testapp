const mongoose = require('mongoose')
const Schema = require('mongoose').Schema


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  }
})


const UserModel = mongoose.Model('User', userSchema)

module.exports = UserModel