const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
// const { User } = (require('../models/did') || require('../models/kisa') || require('../models/police'));
const { Did } = require('../models/did');
const { Kisa } = require('../models/kisa');
const { Police } = require('../models/police');
const router = express.Router();


//REQUEST USER AUTH
router.post('/', async (req, res) =>{
    try{
        const {error} = validateLogin(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let did = await Did.findOne({
            email: req.body.email
            });
        let kisa = await Kisa.findOne({
                email: req.body.email
            });
        let police = await Police.findOne({
            email: req.body.email
            });   

        if(did){
            const validPassword = await bcrypt.compare(req.body.password, (did.password));

            if(!validPassword)
                return res.status(400).send('Invalid email or password.')

            const token = did.generateAuthToken();

            return res.send(token);
        }else if (kisa){
            const validPassword = await bcrypt.compare(req.body.password, (kisa.password));

            if(!validPassword)
                return res.status(400).send('Invalid email or password.')

            const token = kisa.generateAuthToken();

            return res.send(token);
        }else if(police){
            const validPassword = await bcrypt.compare(req.body.password, (police.password));

            if(!validPassword)
                return res.status(400).send('Invalid email or password.')

            const token = police.generateAuthToken();

            return res.send(token);
        }

        if (!did && !kisa && !police)
            return res.status(400).send('Invalid email or password. (No User)');
   
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

// REQUEST DID AUTH
// router.post('/', async (req, res) =>{
//     try{
//         const {error} = validateLogin(req.body);
//         if (error) return res.status(400).send(error.details[0].message);

//         let did = await Did.findOne({
//             email: req.body.email
//         });
//         if (!did)
//             return res.status(400).send('Invalid email or password.');
//         const validPassword = await bcrypt.compare(req.body.password, did.password);

//         if(!validPassword)
//             return res.status(400).send('Invalid email or password.')

//         const token = did.generateAuthToken();

//         return res.send(token);
//     }catch (ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });


// REQUEST KISA AUTH
// router.post('/', async (req, res) =>{
//     try{
//         const {error} = validateLogin(req.body);
//         if (error) return res.status(400).send(error.details[0].message);

//         let kisa = await Kisa.findOne({
//             email: req.body.email
//         });
//         if (!kisa)
//             return res.status(400).send('Invalid email or password.');
//         const validPassword = await bcrypt.compare(req.body.password, kisa.password);

//         if(!validPassword)
//             return res.status(400).send('Invalid email or password.')

//         const token = kisa.generateAuthToken();

//         return res.send(token);
//     }catch (ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });


//REQUEST POLICE AUTH
// router.post('/', async (req, res) =>{
//     try{
//         const {error} = validateLogin(req.body);
//         if (error) return res.status(400).send(error.details[0].message);

//         let police = await Police.findOne({
//             email: req.body.email
//         });
//         if (!police)
//             return res.status(400).send('Invalid email or password.');
//         const validPassword = await bcrypt.compare(req.body.password, police.password);

//         if(!validPassword)
//             return res.status(400).send('Invalid email or password.')

//         const token = police.generateAuthToken();

//         return res.send(token);
//     }catch (ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

function validateLogin(req){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(req);
}

module.exports = router;