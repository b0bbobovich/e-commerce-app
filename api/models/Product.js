const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    composition: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    categories: {
      type: Array,
    },
    sizes: {
      type: Array,
      default: [],
    },
    colors: {
      type: [Object],
      default: [],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
