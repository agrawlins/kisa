const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const { productSchema } = require('./product');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 5, maxlength: 50},
    lastName: {type: String, required: true, minlength: 5, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength: 255},
    password: {type: String, required: true, maxlength: 1024, minlength:5},
    isGoldMember: {type: Boolean, default: false},
    shoppingCart: {type: [productSchema], default: []},
});



const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;