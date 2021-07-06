import React, { useEffect, useState } from 'react';
import carticon from "../../assets/cart-icon.png"
import { Link } from "react-router-dom";
import Button from "../button/button";

import { useSelector, useDispatch } from 'react-redux';
import { commerce } from '../../lib/commerce';

export const fetchCartItems=()=> {

    return function name(dispatch) {

        commerce.cart.contents().then((items) => {

            dispatch({ type: "cart/increment", payload: items })

        });
        commerce.cart.retrieve().then((cart) => {
            dispatch({ type: "cart/totalInCartItems", payload: cart })
            dispatch({ type: "cart/totalSum", payload: cart.subtotal.formatted })

        });

    }
}

function CartItems (props){
    const [cartDisplay, toggleCartDisplay] = useState(false);
  

    const dispatch = useDispatch()
   
    useEffect(() => {
        // Update the document title using the browser API
      
        dispatch(fetchCartItems())

    },[]);
    const cartState = useSelector((state) => state.cart)
    const cartInfo = useSelector((state) => state.cart.totalInCart);
    const total = useSelector((state) => state.cart.totalPrice);
    return(
        <div id="right" className="navbar__right-wrapper">
            <a className="navbar__right-wrapper__link" onClick={() => toggleCartDisplay(!cartDisplay)}>
                <span className="navbar__right-wrapper__totalIncart" >{cartInfo.total_items}</span>
                <img src={carticon} />

            </a>
            {cartDisplay ?
            <div className="shopping-items">
                <div className=" shopping-items-max-height">
                    {
                        cartState.cartItems.map(function (productItem) {

                            
                            return (
                                <div>
                                    <Link to={`/product/${productItem.product_id}`}>
                                        
                                    <div className="shopping-items__inner-wrapper">

                                      
                                        <div class="mini-cart-image-container">
                                            <div>
                                                <img src={productItem.media.source} />
                                            </div >
                                        </div>


                                        <div class="mini-cart-product-content">
                                            <div class="mini-cart-product-content__wrapper">

                                                <div className="cart-atribute">{productItem.name}</div>
                                                <div className="cart-atribute"><b>Price :</b> {productItem.price.formatted_with_symbol}</div>
                                                <div className="cart-atribute"><b>quantity :</b> {productItem.quantity}</div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }


                </div>


                    {cartState.cartItems.length>0 ? <div className="total_sum-in-cart">
                    <span><b>GESAMT :</b></span>
                        <span className="total-amount">{total} €</span>

                </div>: (<p className="error error-message-cart">please add items to cart</p>)}
                <div className="button mini-cart-link-checkout">
                    <Link className="navbar__center_item-link" to="/cart">
                        <Button>
                            Cart
                        </Button>

                    </Link>

                    <Link className="navbar__center_item-link" to="/checkout">

                        <Button>
                            Checkout
                        </Button>
                    </Link>
                </div>




            </div>
        :null    
        }
       </div>
    )
}

export default CartItems ;