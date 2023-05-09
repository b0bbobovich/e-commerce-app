const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        products: [
            {   
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    unique: true
                },
                productId: {
                    type: String,
                    required: true
                },
                color: {
                    type: String
                },
                size: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            },
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model('Cart', CartSchema)