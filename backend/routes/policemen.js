const {Police, validatePolice} = require('../models/police');
const {Kisa, validateKisa} = require('../models/kisa');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();


//GETS ALL POLICEMEN
router.get('/', admin, auth, async (req, res) => {
    try{
        const policemen = await Police.find();
        return res.send(policemen);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//GETS ONE POLICE BY ID
router.get('/:id', admin, auth, async (req, res) => {
    try{
        const police = await Police.findById(req.params.id);
        if(!police)
        return res.status(400).send(`The police with id "${req.params.id} does not exist.`);
        return res.send(police);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


//GETS ONE police BY ID
router.get('/:id', admin, auth, async (req, res) => {
    try{
        const kisa = await Kisa.findById(req.params.id);
        if(!kisa)
        return res.status(400).send(`The kisa with id "${req.params.id} does not exist.`);
        return res.send(kisa);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ALLOWS CLIENT TO CREATE ONE POLICE
router.post('/', async (req, res) => {
    try{
        const{error}=validatePolice(req.body);
        if (error)
        return res.status(400).send(error.details[0].message);
        
        let police = await Police.findOne({
            email: req.body.email
        });
        if (police)
        return res.status(400).send(`${police.email} is already registered.\n Please try signing in or use a different email address.`);
        const salt = await bcrypt.genSalt(10);
        police = new Police({
            policeImg: req.body.policeImg,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
            policeLatLong: req.body.policeLatLong
        })
        await police.save();
        
        const token = police.generateAuthToken();
        
        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send({_id: police._id, policeId: police.policeId, firstName: police.firstName, lastName: police.lastName, email: police.email});
        
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//UPDATES POLICE INFORMATION
router.put('/:id', admin, auth, async (req, res) => {
    try{
        const{error}=validatePolice(req.body);
        if (error)
        return res.status(400).send(error);
        
        const police = await Police.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            {new: true}
            );
            if(!police)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`)
            
            
            await police.save();
            return res.send(police);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
    
//GETS ALL KISAS
router.get('./kisas', admin, auth, async (req, res) => {
    try{
        const kisas = await Kisa.find();
        return res.send(kisas);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES A POLICE ACCOUNT
router.delete('/:id', admin, auth, async (req, res) => {
    try{
        const police = await Police.findByIdAndRemove(req.params.id);
        if(!police)
        return res.status(400).send(`The user with id "${req.params.id}" does not exist`);
        return res.send(police);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ADDS KISA TO POLICE'S KISA TRACKER
router.post('/:policeId/kisaTracker/:kisaId', admin, auth, async (req, res) => {
    try{
        const police = await Police.findById(req.params.policeId);
        if(!police)
        return res.status(400).send(`The user with id "${req.params.policeId}" does not exist.`);
        
        const kisa = await Kisa.findById(req.params.kisaId);
        if(!kisa)
        return res.status(400).send(`The user with id "${req.params.kisaId}" does not exist.`);
        
        police.kisaTracker.push(kisa);
        
        await police.save();
        return res.send(police.kisaTracker);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES KISA FROM POLICE'S KISA TRACKER
router.delete('/:policeId/kisaTracker/:kisaId', admin, auth, async (req, res) => {
    try{
        const police = await Police.findById(req.params.policeId);
        if(!police)
        return res.status(400).send(`The user with id "${req.params.policeId}" does not exist`);
        
        let kisa = await police.kisaTracker.id(req.params.kisaId);
        if(!kisa)
        return res.status(400).send(`The user with id "${req.params.kisaId}" does not exist.`);
        
        kisa = await kisa.remove();
        
        await police.save();
        return res.send(police);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
    
    
    
    module.exports = router;