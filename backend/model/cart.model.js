const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
      title: String,
    email: String,
    price: Number,
    category: String,
    image: String,
    quantity: {
        type: Number,
        default: 1
    }
})

const cartModel = mongoose.model("cart",cartSchema)

module.exports ={cartModel}