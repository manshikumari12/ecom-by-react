import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./login.css"


const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

     const navigate = useNavigate(); 

    const handleSubmit  = () =>{
 if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
        const payload ={
        email:email,
        password:password
        }
        console.log(payload)


         fetch("http://localhost:1111/users/login",{
        method:"POST",
          
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then((res)=>{
        if (res.token) {
         
          console.log(res);
          alert("Login successful!");
          navigate("/");
          localStorage.setItem("token", res.token);
          localStorage.setItem("name", res.name);
          localStorage.setItem("userid", res.userid);
          localStorage.setItem("email", res.email);
        } else if (res.msg === "Invalid credentials"){
         
        alert("Invalid credentials. Please check your email and password.");
          
        }else {
         
          alert(res.msg || "Invalid credentials");
        }
      
    })
    .catch((err)=>{
             console.log(err);
        alert("Invalid Credentials");
    } )
       
    }


    return(
        <>
           <div className="signup-login-container">
 <div className="login-container ">
                 <h1>Login Here</h1>
                Email:<input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        password:<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                 <button onClick={handleSubmit} >Submit</button>
            </div>
           </div>
           
        </>
    )
}

export {Login}