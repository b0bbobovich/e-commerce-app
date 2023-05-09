const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Cart = require('../models/Cart');

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// UPDATE CART
router.patch('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const newCartItem = {
            // creating id manually, because we sending this object as response below
            // and there is no need to find this object with automatically creating id after updating DB
            _id: new mongoose.Types.ObjectId(),
            productId: req.body.productId,
            color: req.body.color,
            size: req.body.size,
            quantity: req.body.quantity
        };
        await Cart.updateOne({ _id: req.params.id }, {
            $push: {
                products: newCartItem
            },
        });
        res.status(200).json(newCartItem);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// GET USER CART
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
     }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL CARTS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router