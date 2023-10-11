import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import fire from "../firebase"
import '../User.css';

/**
* @author
* @function Signup
**/

const Signup = (props) => {

    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [email,setEmail]=useState("")
    const [handleacc,setHandleAcc]=useState(false)
    const [passerr,setPassErr]=useState("")
    const [emailerr,setEmailErr]=useState("")


    const handleSignup=()=>{
        fire.auth()
        .createUserWithEmailAndPassword(email,pass)
        .then(()=>{alert("Registered succesfully! Please go back to sign in page")})
        .catch((error)=>{
            switch(error.code){
                
                case "Email already in use":
                case "Invalid Email":
                
                     setEmailErr(error.message)   
                     break;
                case "Weak Password":
                    setPassErr(error.message)
                    break;
            }
        })
        }

  return(





        <div className="body">
      <form onSubmit={handleSignup} >
         <div className="login__group" >
       <div className="login__group__input">
           
        <input placeholder="Username" name="userr" type="text" value={user} autoFocus required onChange={(e)=>setUser(e.target.value)}></input>
        <p>Please enter a unique name</p>
            
        </div>
        <div className="login__group__input">
        <input type="email"  value={email} required  onChange={(e)=>setEmail(e.target.value)}></input>
         <p>Please enter a proper email!</p>
        
        </div>
        
        <div className="login__group__input">
      
        <input placeholder="Password" type="password" value={pass} min="8" required onChange={(e)=>setPass(e.target.value)}></input>
        <p>{passerr}</p>
        <p>Mininmum 8 letters/digits etc</p>
        </div>
        
        <div className="login__sign-in">
         <button type="submit">Submit</button>
         
         

         </div>
       </div>  
         
       </form>
         <div className="login__sign-in">
         <NavLink exact to ="/">Back to Sign in</NavLink>
         </div>
         

       
          
          </div>


   )

 }

export default Signup