const {Did, validate, validateDid} = require('../models/did');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();


//GETS ALL DIDS
router.get('/', async (req, res) => {
    try{
        const dids = await Did.find();
        return res.send(dids);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//GETS ONE DID BY ID
router.get('/:id', async (req, res) => {
    try{
        const did = await Did.findById(req.params.id);
        if(!did)
        return res.status(400).send(`The user with id "${req.params.id} does not exist.`);
        return res.send(did);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//GETS ALL didS & POLICE
router.get('/', async (req, res) => {
    try{
        const dids = await Did.find();
        return res.send(dids);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ALLOWS CLIENT TO CREATE ONE DID
router.post('/', async (req, res) => {
    try{
        const{error}=validateDid(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        let did = await Did.findOne({
            email: req.body.email
        });
        if (did)
            return res.status(400).send(`${did.email} is already registered.\n Please try signing in or use a different email address.`);
        const salt = await bcrypt.genSalt(10);
        did = new Did({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt)
        })
        await did.save();

        const token = did.generateAuthToken();

        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send({_id: did._id, firstName: did.firstName, lastName: did.lastName, email: did.email});

        return res.send({_id: did._id, firstName: did.firstName, lastName: did.lastName, email: did.email});
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//UPDATES A DID'S INFORMATION
router.put('/:id', async (req, res) => {
    try{
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const did = await Did.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
        },
        {new: true}
        );
        if(!did)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`)
            

        await did.save();
        return res.send(did);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES A DID
router.delete('/:id', async (req, res) => {
    try{
        const did = await Did.findByIdAndRemove(req.params.id);

        if(!did)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist`);
        return res.send(did);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;