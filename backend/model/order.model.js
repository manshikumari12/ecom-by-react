const mongoose=require("mongoose")

//user schema
const orderSchema =mongoose.Schema({

    email: String,
     orders: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
            date: { type: Date, default: Date.now },
            name: { type: String, },
            address: { type: String, },
            pincode: { type: Number, },
            phone: { type: Number, },
        }
    ]
    
},{
    versionKey:false
})

const ordermodel=mongoose.model("order",orderSchema)

module.exports={
    ordermodel
}