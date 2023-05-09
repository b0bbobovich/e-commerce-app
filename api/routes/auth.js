const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Cart = require('../models/Cart');
const OrdersList = require('../models/OrdersList');
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');
const {verifyToken} = require('./verifyToken')


// Register
router.post('/register', async (req, res) => {
    if (req.body.username && req.body.password && req.body.email && req.body.firstName && req.body.lastName) {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        });

        try {
            const savedUser = await newUser.save();
            const userCart = new Cart({ _id: mongoose.Types.ObjectId(savedUser._id) }); 
            const userOrders = new OrdersList({ _id: mongoose.Types.ObjectId(savedUser._id) });
            await userCart.save();
            await userOrders.save();
            res.status(201).json(savedUser);
        }
        catch (err) {
            res.status(520).json("A user with such username or email already exist!");
        }
    }
    else {
        res.status(500).json("Ooops...Something goes wrong!");
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
        let user = null;
        if (req.body.login.includes("@")) {
            user = await User.findOne({ email: req.body.login });
        }
        else if (!req.body.login.includes("@")) {
            user = await User.findOne({ username: req.body.login });
        }
        else {
            res.status(401).json("No email or username provided!")
            return
        }
        if (!user) {
            res.status(403).json('Wrong credentials!');
            return
        };
        
        const hashedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            res.status(401).json('Wrong credentials!');
            return
        };

        const accessToken = jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            { expiresIn: '1h' }
        );
        
        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken});
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);
    }  
})


//LOGOUT
router.post('/logout', verifyToken, async (req, res) => {
    // here can be some logic to unsign logged user token 
    res.status(200).json('You logged out successfully!')
})

module.exports = router;

