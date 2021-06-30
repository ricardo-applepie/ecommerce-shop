import React from "react";
import "./button.css"
function Button({ children}){

 return(
<div>
         <button class="mini-cart-button">
        {children}
    </button>
</div>

 )

}

export default Button;