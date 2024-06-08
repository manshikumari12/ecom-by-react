const express = require("express")
const {cartModel} = require("../model/cart.model")
cartRouter = express.Router()


cartRouter.post("/add",async(req,res)=>{
const {title,email,price,category,image, quantity}=req.body

const productInCart =await cartModel.findOne({title ,email})
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


cartRouter.patch("/patch",async(req,res)=>{
  
    const itemId = req.body.itemId
    const itemQuantity = req.body.quantity

   
    try {
        await cartModel.findByIdAndUpdate(itemId, { quantity: itemQuantity })
        let product = await cartModel.findById(itemId)
        return res.status(200).send(product);
    } catch (error) {
        return res.send(error)
    }
})


cartRouter.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const result = await cartModel.findOneAndDelete({ _id: id, email });
    if (result) {
      return res.status(200).send({ msg: "Product removed from cart" });
    } else {
      return res.status(404).send({ msg: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
});



module.exports={cartRouter}