const {User} = require('../models/user');
const {Product, validate} = require('../models/product');
const express = require('express');
const router = express.Router();


//GETS ALL USERS
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        return res.send(users);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//GETS ONE USER BY ID
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user)
        return res.status(400).send(`The user with id "${req.params.id} does not exist.`);
        return res.send(user);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//CREATES ONE NEW USER
router.post('/', async (req, res) => {
    try{
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        await user.save();
        return res.send(user);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//ADDS PRODUCT TO USER SHOPPING CART
router.post('/:userId/shoppingCart/:productId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        if(!user)
            return restart.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        const product = await Product.findById(req.params.productId);
        if(!product)
            return restart.status(400).send(`The product with id "${req.params.productId}" does not exist.`);

        user.shoppingCart.push(product);

        await user.save();
        return res.send(user.shoppingCart);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//UPDATES USER INFORMATION
router.put('/:id', async (req, res) => {
    try{
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
        },
        {new: true}
        );
        if(!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist.`)
            

        await user.save();
        return res.send(user);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.id);

        if(!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist`);
        return res.send(user);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;