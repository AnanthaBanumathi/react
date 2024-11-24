import React, {  useState } from 'react';
import './navbar1.css'
import { Link} from 'react-router-dom'
 import { FaShoppingCart, FaUser } from "react-icons/fa";
 

const NavbarComponent = ({isAuthenticated}) => {
  
    const [menu,SetMenu]=useState("");
    
    const username = localStorage.getItem('username');
   
  return (
    <>
 {  isAuthenticated ? (<div className='nav_bar'>
    <div className="nav_container">
        <div className="nav_left">
           <div className='brand'>
           <div >
             
           </div>
            <p className="name">SWEET CAKE</p>
            </div>
            <ul className="nav_menu">
                    <li onClick={()=>{SetMenu("About")}}><Link style={{textDecoration:"none",color:'black'}} to={"/about"}>About Us</Link>  {menu==="kids"?<hr />:null}</li>
                    <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:"none" ,color:'black'}}  
                    to={"/latest"}>Creative</Link> {menu==="shop"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("birthday")}}><Link style={{textDecoration:"none",color:'black'}} to={"/birthday"}>Birthday</Link>{menu==="mens"?<hr />:null}</li>
                    <li onClick={()=>{SetMenu("wedding")}}><Link style={{textDecoration:"none",color:'black'}} to={"/wedding"}>Wedding</Link> {menu==="womens"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("christmas")}}><Link style={{textDecoration:"none",color:'black'}} to={"/christmas"}>Christmas</Link>  {menu==="kids"?<hr />:null}</li> 
                    <li onClick={()=>{SetMenu("contact")}}><Link style={{textDecoration:"none",color:'black'}} to={"/contact"}>Contact Us</Link>  {menu==="kids"?<hr />:null}</li>                                     
                 </ul>
                 
           </div>
        <div className='right_nav'>
            <div className="user">
            <span><FaUser/></span>
              <p>{username}</p>
              
            </div>
           
        </div>
    </div>
    
    
  
    </div>): null}
      {/* <div class="first">
      <h1 class="second">Delicious and Tasty Cakes</h1>
      <h3 class="three">Sweet dreams are made of cake !</h3>
      <button class="btn">Order Now</button>
      </div> */}
    </>
  )
}

export default NavbarComponent;