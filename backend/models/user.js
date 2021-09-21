const mongoose = require('mongoose');
const Joi = require('joi');
const { productSchema } = require('./product');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2, maxlength: 255},
    lastName: {type: String, required: true, minlength: 2, maxlength: 255},
    isGoldMember: {type: Boolean, default: false},
    shoppingCart: {type: [productSchema], default: []},
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;