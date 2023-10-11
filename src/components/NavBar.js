import React from 'react'
import "../Navbar.css"
import { NavLink,Link } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

//   const handleLogout=()=>{
//     fire.auth().signOut();
// }  

  return(
      <>
    <div className="nav" >
        <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        
      />
  
      <Link className="nav__logout" exact to="/" >Logout</Link>
      
      
     
      
      </div>
      
      
      </>
   )

 }

export default Navbar