import { useState } from "react"
import {useNavigate} from "react-router-dom"

import './signup.css';

const Signup = ()=>{
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

 const navigate =useNavigate()
  


  const handleSubmit = () =>{
    if(!name||!email||!password){
    alert("Please fill in all fields.")
    return 
}
    const payload={
        email:email,
        name:name,
        password:password,
    
    }
    console.log(payload);
    fetch("https://e-com-backend-dad7.onrender.com/users/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((res) =>{
        console.log(res)
        alert("Signup successfully");
         navigate("/login");
    })
    .catch((err)=> console.log(err))
  }

return (
    <>
     <div className="signup-login-container">
 <div className="signup-container">
        <h1>Registration Page</h1>
        Name:<input type="text" placeholder="name..." value={name} onChange={(e)=>setName(e.target.value)}/>
        Email:<input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        password:<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
   
        <button onClick={handleSubmit} >Submit</button>
    </div>
     </div>
   
    </>
   
)
}

export {Signup}