import React, { Component } from "react";
import { commerce } from '../lib/commerce';

class Getcartitems extends Component{

getCartItems=()=>{
  commerce.cart.contents().then((items) => console.log(items));
}    
render(){
return(
<div>
<button onClick={this.getCartItems}>view cart</button>
</div>

)

}

}
export default Getcartitems;