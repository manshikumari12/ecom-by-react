const express = require("express")
const {productModel} = require("../model/product.model")
productRouter =express.Router()

productRouter.get("/", async (req, res) => {
    try {
        const products = await productModel.find(); 
        res.status(200).send(products); 
    } catch (error) {
        
        res.status(500).send("Error retrieving products"); 
    }
});

productRouter.post("/add",async(req,res)=>{
    try{
        const product=new productModel(req.body)
        console.log(product)
        await product.save()
        res.status(200).send({"msg":"A new product has been added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})
module.exports={productRouter}