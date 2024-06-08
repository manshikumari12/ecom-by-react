const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.lyyjl0e.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0")

module.exports={ connection}