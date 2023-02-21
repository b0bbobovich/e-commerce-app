const router = require('express').Router();
const User = require('../models/User');
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
            res.status(201).json(savedUser);
        }
        catch (err) {
            res.status(520).json("A user with such username or email already exist!");
        }
    }
    else {
        res.status(420).json('Please fill in all fields!')
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(401).json('Wrong credentials!');
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

