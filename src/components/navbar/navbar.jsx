import React,{Component} from  "react" ;

import "./navbar.css";
import logo from "../../assets/website-logo.jpg"
import  Button  from "../button/button";
import CartItems from "../../components/cartItems/cartItems"
import { Link} from "react-router-dom";


 export  const Navbar =(props)=>{


return(
<div>
   

    <div className="navbar__inner-wrapper content__wrapper-width mobile-container">

        <div className="navbar__left-wrapper">
         <div className="navbar__left-logo">
                <Link className="navbar__center_item-link" to="/eccommerce-shop">
                    <img src={logo} />
                </Link>
               

          </div>
        </div>

        <div className="navbar__center-wrapper">
            <ul className="navbar__center-list">
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/eccommerce-shop">Home</Link></li>
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/shop">Shop</Link></li>
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/ricardo-special"> Special</Link></li>
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/contact">Contact</Link></li>
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/login"> Login</Link></li>
                <li className="navbar__center_item"><Link className="navbar__center_item-link" to="/SignUp"> SignUp</Link></li>


            </ul>
        </div>

        
         <div>
            <CartItems/>
         </div>       

    </div>
       
    </div>
)

}