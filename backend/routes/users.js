const {User, validateUser} = require('../models/user');
const {Product, validateProduct} = require('../models/product');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
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

//ALLOWS CLIENT TO CREATE ONE USER
router.post('/', async (req, res) => {
    try{
        const{error}=validateUser(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        let user = await User.findOne({
            email: req.body.email
        });
        if (user)
            return res.status(400).send(`${user.email} is already registered.\n Please try signing in or use a different email address.`);
        const salt = await bcrypt.genSalt(10);
        user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt)
        })
        await user.save();

        const token = jwt.sign(
            {_id: user._id, firstName: user.firstName, lastName: user.lastName},
            config.get('jwtSecret')
        );

        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send({_id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email});

        return res.send({_id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email});
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
        const{error}=validateUser(req.body);
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

//UPDATES PRODUCT INFO IN USER'S SHOPPING CART
router.put('/:userId/shoppingCart/:productId', async (req, res) => {
    try{
        const{error}=validateProduct(req.body);
        if (error)
            return res.status(400).send(error);

        const user = await User.findById(req.params.userId);
        if(!user)
            return restart.status(400).send(`The user with id "${req.params.userId}" does not exist.`);
            
        const product = await user.shoppingCart.id(req.params.productId);
        if(!product)
            return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
                product.name = req.body.name,
                product.description = req.body.description,
                product.category = req.body.category,
                product.price = req.body.price,
                product.dateModified = Date.now(),

        await user.save();
        return res.send(product);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//DELETES A USER ACCOUNT
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

//DELETES A PRODUCT IN USER'S SHOPPING CART
router.delete('/:userId/shoppingCart/:productId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        if(!user)
            return res.status(400).send(`The user with id "${req.params.id}" does not exist`);

        const product = await user.shoppingCart.id(req.params.productId);
        if(!product)
            return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
        
        product = await product.remove();

        await user.save();
        return res.send(user);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;