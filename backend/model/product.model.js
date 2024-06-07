const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    description: String,
    category: String,

    rating: {
        rate: Number,
        count: Number
    }
   

},{
    versionKey:false
})

const productModel=mongoose.model("products",productSchema)

module.exports={productModel}