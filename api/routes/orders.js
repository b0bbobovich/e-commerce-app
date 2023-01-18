const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
var crypto = require('crypto');
var sha1 = crypto.createHash('sha1');

// CREATE ORDER
router.post('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();

        const liqpayData = prepareLiqpayData(savedOrder);
        const liqpaySignature = prepareLiqpaySignature(liqpayData);

        const liqpayParams = {
            // orderId: savedOrder._id,
            data: liqpayData,
            signature: liqpaySignature
        }
        res.status(200).json(liqpayParams);
    }
    catch (err) {
        res.status(500).json(err);
        console.error(err)
        
    }
});

const prepareLiqpayData = (order) => {

    const jsonString = JSON.stringify({
        "public_key": process.env.LIQPAY_PUBLIC_KEY,
        "version": "3",
        "action": "pay",
        "amount": String(order.amount),
        "currency": "USD",
        "description": "clothing retail",
        "order_id": order._id
    });
    return new Buffer.from(jsonString, 'utf-8').toString('base64')
}

const prepareLiqpaySignature = (liqpayData) => {

    const hash = new Buffer.from(sha1
        .update(process.env.LIQPAY_PRIVATE_KEY + liqpayData + process.env.LIQPAY_PRIVATE_KEY)
        .copy()
        .digest('binary'), 'binary').toString('base64');
    return hash

}

// UPDATE ORDER
router.put('/:orderId', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, {
            $set: req.body,
        }, { new: true })
        res.status(200).json(updatedOrder);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// DELETE CART
router.delete('/:orderId', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.status(200).json('Order has been deleted...');
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET USER ORDERS
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({userId: req.params.id});
        res.status(200).json(orders);
     }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const data = await Order.find({});
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth }
                }
            },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount'
                }
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' }
                }
            }
        ]);

        res.status(200).json(income);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


module.exports = router