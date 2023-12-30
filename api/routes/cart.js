const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Cart = require('../models/Cart');
const Products = require('../models/Product');

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken');

// ADD OR UPDATE ITEM IN CART
router.patch('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const product = await Products.findById(req.body.product._id);
    const cartId = req.params.id;
    const existingCartItem = await Cart.findOneAndUpdate(
      {
        _id: cartId,
        'products._id': req.body._id,
      },
      {
        $set: {
          'products.$.size': req.body.size,
          'products.$.quantity': req.body.quantity,
          'products.$.price': req.body.totalPrice,
        },
      },
      { new: true }
    );
    if (existingCartItem) {
      const updatedItem = existingCartItem.products.find(
        (item) => item._id.toString() === req.body._id
      );
      res.status(200).json(updatedItem);
    } else {
      const newCartItem = {
        _id: new mongoose.Types.ObjectId(),
        color: req.body.color,
        size: req.body.size,
        quantity: req.body.quantity,
        price: req.body.totalPrice,
        product,
      };

      await Cart.updateOne(
        { _id: cartId },
        {
          $push: {
            products: newCartItem,
          },
        }
      );

      res.status(200).json(newCartItem);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // ADD OR UPDATE ITEM IN CART
// router.patch('/:id', verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const product = await Products.findById(req.body.productId);
//     const newCartItem = {
//       // creating id manually, because we sending this object as response below
//       // and there is no need to find this object with automatically creating id after updating DB
//       _id: new mongoose.Types.ObjectId(),
//       color: req.body.color,
//       size: req.body.size,
//       quantity: req.body.quantity,
//       price: req.body.totalPrice,
//       product,
//     };
//     await Cart.updateOne(
//       { _id: req.params.id },
//       {
//         $push: {
//           products: newCartItem,
//         },
//       }
//     );
//     res.status(200).json(newCartItem);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// REMOVE ITEM FROM CART
router.patch(
  '/:id/remove/:itemId',
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      await Cart.updateOne(
        { _id: req.params.id },
        {
          $pull: {
            products: { _id: req.params.itemId },
          },
        }
      );

      res.status(200).json({ message: 'Item removed from cart successfully.' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// GET USER CART
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CARTS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
