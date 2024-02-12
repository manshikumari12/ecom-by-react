const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
// const {noteRouter}=require("./routes/note.routes")

const {productRouter}=require("./routes/product.router")
// const {auth}=require("./middleware/auth.middleware")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)

// app.use("/notes",noteRouter)
app.use("/product",productRouter)
// app.use(auth)

app.listen(1111,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot connect to DB")
        console.log(err)
    }
    console.log("Server is running at port 1111")
})



