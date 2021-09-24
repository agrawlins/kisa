const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const didSchema = new mongoose.Schema({
    img:{
        data: Buffer,
        contentType: String
    },
    firstName: {type: String, required: true, minlength: 1, maxlength: 50},
    lastName: {type: String, required: true, minlength: 1, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength: 255},
    password: {type: String, required: true, maxlength: 1024, minlength:5},
    didLatLong: {type: Array, default: [((Math.random()/100)+40.46), ((Math.random()/100)-77.52)]},
    inDistress: {type: Boolean, required: true, default: false}
});

didSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, firstName: this.firstName, lastName: this.lastName}, config.get('jwtSecret'));
};

const Did = mongoose.model('Did', didSchema);

function validateDid(did) {
    const schema = Joi.object({
        img: Joi.string,
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
        didLatLong: Joi.array,
        inDistress: Joi.boolean()
    });
    return schema.validate(did);
}

exports.Did = Did;
exports.validateDid = validateDid;
exports.didSchema = didSchema;