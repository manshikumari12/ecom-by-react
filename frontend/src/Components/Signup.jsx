import { useState } from "react"

const Signup = ()=>{
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [role,setRole] =useState("")


  const handleSubmit = () =>{
    const payload={
        email:email,
        name:name,
        password:password,
        role:role
    }
    console.log(payload);
    fetch("http://localhost:1111/users/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch((err)=> console.log(err))
  }

return (
    <>
     <h1>Registration Page</h1>
    <div>
        Name:<input type="text" placeholder="name..." value={name} onChange={(e)=>setName(e.target.value)}/>
        Email:<input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        password:<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        Role:<input type="text" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
        <button onClick={handleSubmit} >Submit</button>
    </div>
    </>
   
)
}

export {Signup}