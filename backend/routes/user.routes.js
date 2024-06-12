const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { blacklistModel } = require("../model/black.list.model");
const { auth } = require("../middleware/auth.middleware");


//registration
userRouter.post("/signup",async(req,res)=>{
    const {name,email,password,}=req.body
    if(!name||!email||!password){
        return res.status(400).send({"msg":"All Fileds Required!!"})
    }else{
  try{
        bcrypt.hash(password, 5, async (err, hash) => {
            const user=new UserModel({name,email,password:hash,})
            await user.save()
            res.status(200).send({"msg":"Registration has been done!"})
        });
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
    }
  
})

//login(authentication)
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if(!email||!password){
         return res.status(400).send({"msg":"All Fileds Required!!"})
    }else{
   try {
        const user = await UserModel.findOne({ email });
            if (!user) {
      return res.status(404).send({ msg: 'User not found' });
    }
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userid: user._id }, 'masai', { expiresIn: '1h' });
                    res.status(200).send({
                        "msg": "Login successful!",
                        "token": token,
                        "name": user.name,
                        "userid": user._id,
                        "email": user.email
                    });
                } else {
                    res.status(400).send({ "msg": "Wrong Credentials" });
                }
            });
        } else {
            res.status(404).send({ "msg": "User not found" });
        }
    } catch (err) {
        res.status(400).send({ "msg": err.message });
    }
    }
 
});


//get all email
userRouter.get("/",async(req,res)=>{
    try {
        const user = await UserModel.find()
        res.status(200).send({"msg":"all user Data !!",user})
    } catch (error) {
           res.status(400).send({"msg":err.message})
    }
})


//logout 

userRouter.get("/logout",auth,async(req,res)=>{
  
    const token = req.headers.authorization;
   
    if(!token ){
        return res.status(400).send({"msg":"Invalid token!!"})
    }else{
        try {
            const blacklist =new blacklistModel({token})
            await blacklist.save()
            return res.status(200).send({"msg":"Logout Sucessfully!!"})
        } catch (error) {
             return res.status(500).send({ "msg": "Logged out failed!" });
        }
    }
})


// placeorder 

// userRouter.post("/placeorder",async(req,res)=>{

// })

// //getorder
// userRouter.get("/",async(req,res)=>{
    
// })
module.exports={
    userRouter
}