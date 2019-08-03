const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 6,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtsecretkey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(User) {
  const schema = {
    name: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(30).email()
  };

  return Joi.validate(User, schema);
}

exports.User = User; 
exports.validate = validateUser;
