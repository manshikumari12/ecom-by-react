const express = require("express")
const {cartModel} = require("../model/cart.model")
cartRouter = express.Router()


cartRouter.post("/add",async(req,res)=>{
const {title,email,price,category,image, quantity}=req.body
   

const productInCart =await cartModel.findOne({title ,email})
// console.log(productInCart)

if(productInCart){
    res.status(409).send({"msg":"product is already in cart !!"})

}else{
    try {
         const newProduct = new cartModel({ title, email, price, category, image, quantity });
            await newProduct.save();
            return res.status(201).send({ "msg": "New product is added successfully!" });
    } catch (error) {
        res.status(500).send({"msg":"Internal server error"})
    }
}
})



cartRouter.get("/",async(req,res)=>{
 
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  cartModel.find({ email })
    .then(cartItems => {
      res.json(cartItems);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    });
})


cartRouter.patch("/patch/:id",async(req,res)=>{
       const email = req.body.email
    const itemId = req.body.itemId
    const itemQuantity = req.body.quantity

    console.log(email, itemId)
    try {
        await cartModel.findByIdAndUpdate(itemId, { quantity: itemQuantity })
        let product = await cartModel.findById(itemId)
        return res.status(200).send(product);
    } catch (error) {
        return res.send(error)
    }
})
cartRouter.delete("/delete/:id",async(req,res)=>{
        const _id = req.query.id

    if (!_id) {
        return res.status(400).send({ "msg": "Provide the id of product" })
    } else {
        try {
            await cartModel.findByIdAndDelete(_id)
            return res.send({ "msg": "Product removed" })
        } catch (error) {
            return res.send({ "msg": "No such product found!" })
        }
    }
})

cartRouter.delete("/",async(req,res)=>{
        const email = req.body.email

    try {
        await cartModel.deleteMany({ email: email })
        return res.send({ "msg": "cart cleared" })
    } catch (error) {
        return res.send({ "msg": "failed to clear cart!" })
    }
})
module.exports={cartRouter}