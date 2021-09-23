const {Kisa, validateKisa} = require('../models/kisa');
const {Did, validateDid} = require('../models/did');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();


//GETS ALL KISAS
router.get('/', async (req, res) => {
    try{
        const kisas = await Kisa.find();
        return res.send(kisas);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//GETS ONE KISA BY ID
router.get('/:id', async (req, res) => {
    try{
        const kisa = await Kisa.findById(req.params.id);
        if(!kisa)
        return res.status(400).send(`The kisa with id "${req.params.id} does not exist.`);
        return res.send(kisa);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ALLOWS CLIENT TO CREATE ONE KISA
router.post('/', async (req, res) => {
    try{
        const{error}=validateKisa(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        let kisa = await Kisa.findOne({
            email: req.body.email
        });
        if (kisa)
            return res.status(400).send(`${kisa.email} is already registered.\n Please try signing in or use a different email address.`);
        const salt = await bcrypt.genSalt(10);
        kisa = new Kisa({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt)
        })
        await kisa.save();

        const token = kisa.generateAuthToken();

        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send({_id: kisa._id, firstName: kisa.firstName, lastName: kisa.lastName, email: kisa.email});

        return res.send({_id: kisa._id, firstName: kisa.firstName, lastName: kisa.lastName, email: kisa.email});
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ADDS DID TO KISA'S ASSISTS TRACKER
router.post('/:kisaId/assistTracker/:didId', auth, async (req, res) => {
    try{
        const kisa = await Kisa.findById(req.params.kisaId);
        if(!kisa)
            return res.status(400).send(`The user with id "${req.params.kisaId}" does not exist.`);

        const did = await Did.findById(req.params.didId);
        if(!did)
            return res.status(400).send(`The user with id "${req.params.didId}" does not exist.`);

        kisa.assistTracker.push(did);

        await kisa.save();
        return res.send(kisa.assistTracker);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//UPDATES KISA INFORMATION
router.put('/:id', async (req, res) => {
    try{
        const{error}=validateKisa(req.body);
        if (error)
            return res.status(400).send(error);

        const kisa = await Kisa.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
        },
        {new: true}
        );
        if(!kisa)
            return res.status(400).send(`The kisa with id "${req.params.id}" does not exist.`)
            

        await kisa.save();
        return res.send(kisa);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES A KISA ACCOUNT
router.delete('/:id', async (req, res) => {
    try{
        const kisa = await Kisa.findByIdAndRemove(req.params.id);
        if(!kisa)
            return res.status(400).send(`The kisa with id "${req.params.id}" does not exist`);
        return res.send(kisa);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES A DID IN KISA'S ASSISTS TRACKER
router.delete('/:kisaId/assistTracker/:didId', auth, async (req, res) => {
    try{
        const kisa = await Kisa.findById(req.params.kisaId);
        if(!kisa)
            return res.status(400).send(`The user with id "${req.params.kisaId}" does not exist`);

        let did = await kisa.assistTracker.id(req.params.didId);
        if(!did)
            return res.status(400).send(`The user with id "${req.params.didId}" does not exist.`);
        
        did = await did.remove();

        await kisa.save();
        return res.send(kisa);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;