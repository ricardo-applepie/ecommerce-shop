import React, { Component } from "react";
import { commerce } from '../lib/commerce';
import HoverRating from "../components/ratings/ratings";

import {stripHtml} from 'string-strip-html';
import "../components/navbar/navbar.css";
import {
    Link

} from "react-router-dom";

 function ProductItem (props) {

 const addToCart=()=>{
     
     commerce.cart.add(props.product.id, 1)
 }
 

 

        const { product } = props
        const { result } = stripHtml(product.description);



        return (
            <div className="product__card">
                <Link to={`/product/${product.id}`}>
                <img className="product__image" src={product.media.source} alt={product.name} />
                </Link>
                <div className="product__info">
                    <Link to={`/product/${product.id}`}>

                    <h4 className="product__name">{product.name}</h4>
                        </Link>
                    <p className="product__description">
                        {/* product description stripped of html tags */}
                        {result}
                    </p>
                    <div className="product__details">
                        <p className="product__price">
                            {product.price.formatted_with_symbol}
                        </p>
                    </div>
                    <div>
                        <HoverRating/>
                    </div>
                    <button className="product__details-button" onClick={()=>(addToCart())}>
                       
                      
                        add To cart
                    
                    </button>
                 
                </div>
            </div>
        );
    
};
export default ProductItem;