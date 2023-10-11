import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import '../User.css';
import fire from "../firebase"
/**
* @author
* @function User
**/

const User = (props) => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [email,setEmail]=useState("")
    const [handleacc,setHandleAcc]=useState(false)
    const [passerr,setPassErr]=useState("")
    const [emailerr,setEmailErr]=useState("")
    const [render,setRender]=useState("")

const handleSignin=()=>{
fire.auth()
.signInWithEmailAndPassword(email,pass)
.then(()=>{setRender("Proceed")})
.catch((error)=>{
    switch(error.code){
        case "Invalid Email":
        case "User disabled":
        case "User not found":
             setEmailErr(error.message)   
             break;
        case "Inavlid Password":
            setPassErr(error.message)
            break;
    }
})


}


//   const handleLogout=()=>{
//       fire.auth().signOut();
//   }  

 const authListener=()=>{
     fire.auth().onAuthStateChanged(user=>{
         if(user)
         {
             setUser(user)
         }
         else{
             setUser("")
         }
     })

 } 

 useEffect(()=>{
    authListener();
 },[])



  return(


   <div className="body">        
       <div className="login__group" >
           <div><h1 style={{color:"maroon",fontSize:"50px"}}>NETFLIXX</h1></div>
           <div style={{color:"maroon",fontSize:"19px"}}>Trailers</div>
            <div className="login__group__input">

           
        <input placeholder="Email" name="email" type="email" value={email} autoFocus required onChange={(e)=>setEmail(e.target.value)}></input>
        <p>{emailerr}</p>
            
        </div>
        
        <div className="login__group__input">     
        <input placeholder="Password" name="passw" type="password" value={pass} required onChange={(e)=>setPass(e.target.value)}></input>
        <p>{passerr}</p>
        </div>
        <label style={{color:"white",fontSize:"10px"}}>*A Proceed button will appear after clicking sign in only if you're a registered user!</label>
      
       </div>     
        <div className="login__sign-in">     
            <button onClick={handleSignin}>Sign in</button>
            <hr></hr>
            <p><NavLink  exact to="/ZXCAETTUNnbsg125fj/netflixx">{render}</NavLink></p>
        <p>Don't have an account? <NavLink  exact to="/signup">Sign up</NavLink></p>    
        </div>
        {/* <NavLink className="disabled-link" exact to="/netflixx" >Proceed</NavLink> */}               
    
  </div>


    
   )

 }

export default User