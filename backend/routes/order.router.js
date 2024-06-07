const express = require("express");
const {ordermodel} = require("../model/order.model")// Assuming you have a ordermodel defined

const orderrouter = express.Router();


 orderrouter.post("/order",async(req,res)=>{
const { email, orders } = req.body;
    try {
        let user = await ordermodel.findOne({ email });

        if (user) {
            orders.forEach((ele) => {
                user.orders.push(ele);
            });

            await user.save();

            return res.status(201).send("Orders saved successfully");
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send("Orders couldn't be saved");
    }
})
orderrouter.get("/", async(req,res)=>{
 const { email } = req.body;

    try {
        let user = await ordermodel.findOne({ email }).populate('orders.product');

        if (user) {
            return res.status(201).send(user);
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send("Orders couldn't be fetched");
    }
});

orderrouter.post("/address", async(req,res)=>{
 const { email, address } = req.body;

    try {
        let user = await ordermodel.findOne({ email });

        if (user) {
            user.addresses.push(address);
            await user.save();
            return res.status(201).send("Address is saved in profile");
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send("Couldn't save address!");
    }
});



module.exports = { orderrouter };
