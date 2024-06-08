const mongoose=require("mongoose")

//user schema
const userSchema=mongoose.Schema({
   name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
    unique: true,   
  },
  password: {
    type: String,
    required: true, 
  },
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

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}