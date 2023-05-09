const mongoose = require('mongoose');

const OrdersListSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        amount: {
            type: Number,
        },
        status: {
            type: String,
        },
        contact: {
            type: Object,
        },
        address: {
            type: Object,
        },
        products: [
            {
                productId: {
                    type: String
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
            }
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model('OrdersList', OrdersListSchema)