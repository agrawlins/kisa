const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const { didSchema } = require('./did');

const kisaSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 1, maxlength: 50},
    lastName: {type: String, required: true, minlength: 1, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength: 255},
    password: {type: String, required: true, maxlength: 1024, minlength:5},
    assistTracker: {type: [didSchema], default: []},
    img:{
        data: Buffer,
        contentType: String
    }
});

kisaSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, firstName: this.firstName, lastName: this.lastName}, config.get('jwtSecret'));
};

const Kisa = mongoose.model('Kisa', kisaSchema);

function validateKisa(kisa) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(kisa);
}

exports.Kisa = Kisa;
exports.validateKisa = validateKisa;
exports.kisaSchema = kisaSchema;