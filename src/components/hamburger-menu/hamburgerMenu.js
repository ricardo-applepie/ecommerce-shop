
import React, { useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import MenuIcon from '@material-ui/icons/Menu';
function HamburgerMenu() {

    const [isMobileMenuVisible,toggleMobileVisibility]= useState(false)
    return(
        <div>


           <div className="mobile-menu">
                <div className="mobile-menu__icon "onClick={() => toggleMobileVisibility(!isMobileMenuVisible)}><MenuIcon/></div>
              { isMobileMenuVisible? <ul className="mobile-menu-items">
                   <li>
                        <Link to="/eccommerce-shop">
                            Home
                        </Link>   
                     </li>
                    <li>
                        <Link to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/ricardo-special">
                            ricardo-special
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </li>
               </ul>: null}
           </div>
        </div>
    )
}

export default HamburgerMenu 