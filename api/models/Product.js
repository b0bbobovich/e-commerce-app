const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        images: {
            type: String,
            required: true
        },
        composition: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        categories: {
            type: Array
        },
        size: {
            type: Array
        },
        colors: {
            type: Array
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)