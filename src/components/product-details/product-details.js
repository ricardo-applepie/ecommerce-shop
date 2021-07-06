import React, { useEffect, useState } from "react";
import { commerce } from '../../lib/commerce';
import Button  from "../button/button";
import ContentZoom from 'react-content-zoom';
import { stripHtml } from 'string-strip-html';
import Accordion from 'react-bootstrap/Accordion';
import thanksgif from "../../assets/thanksanimation.gif"
import { withRouter } from "react-router";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./product-details.css";
import { useSelector, useDispatch } from 'react-redux';

import { fetchCartItems } from "../../components/cartItems/cartItems";

 function Productdetails (props){
     const id = props.match.params.id;
   const dispatch = useDispatch()
   const [productInformation, setproductInformation]= useState("")
     
  function  getUrlParams() {
      setproductInformation(id)
        commerce.products.retrieve(id).then((product) => {
            setproductInformation( product )
        }
            );

    }

useEffect(() => {
    getUrlParams()
}, [id])

   function addItemtoCart(prod) {
        commerce.cart.add(prod.id, 1).then((response) => {
            dispatch(fetchCartItems())
        });
   }

     let prodDescription = stripHtml(`${productInformation.description}`)

   
    return (
        <div className="content__wrapper-width">

            <div className="product__detail ">
             <div className="product__detail-image">
                    <img src={productInformation.media&&productInformation.media.source} />
              </div>
                {/* <div className="product__detail-sub-images">
                   <ul>
                        <li> <img src="" /></li>
                        <li> <img src="" /></li>
                        <li> <img src="" /></li>
                        <li> <img src="" /></li>
                   </ul>
                </div> */}
                <div className="product__detail-description">
                    <h3>{productInformation.name ? productInformation.name : 0}</h3>
                    <h1>{productInformation.name ? productInformation.price.formatted_with_symbol : 0}</h1>
                    <p>
                        {prodDescription.result ? prodDescription.result:""}
                    </p>

                    <div className="product__detail-description-btns">
                        <div onClick={() => addItemtoCart(productInformation)}>

                      
                        <Button>
                                add to Cart
                        </Button>
                        </div>
                        {/* <FavoriteBorderIcon/> */}
                    </div>
                    <div>
                        <div>
                            <div className="">
                                <div className="js-global-accordion-header"><h1>Top Qaulity Only </h1></div>
                                <div className="js-global-accordion-description">

                                <p class="error">
                                Available in stock 
                                </p>
                                <div>
                                    <p>
                                            But whether we are looking for Tortoise Creek among the dross of the supermarket shelf or springing for an inexpensive case of top-quality cabernet from de Négoce, there are bargains to be found — and savored.
                                    </p>
                                </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>    
            </div>             
       <div className="product-detail-gif">
                <img src={thanksgif}/>
       </div>
       
       
        </div>
        
    )


  
}
export default withRouter(Productdetails);
