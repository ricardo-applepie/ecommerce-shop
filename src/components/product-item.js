import React, { useEffect, useState} from 'react';
import { commerce } from '../lib/commerce';
import HoverRating from "../components/ratings/ratings";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {stripHtml} from 'string-strip-html';
import "../components/navbar/navbar.css";
import {
    Link

} from "react-router-dom";
import {fetchCartItems} from "../components/cartItems/cartItems";
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}





 function ProductItem (props) {
     const dispatch = useDispatch()
     const [successMessage, toggleSuccessMessage] = useState(false);



     const handleClose = (event, reason) => {
         if (reason === 'clickaway') {
             return;
         }

         toggleSuccessMessage(false);
     };




 const addToCart=()=>{
     

     commerce.cart.add(props.product.id, 1);
     dispatch(fetchCartItems());
     toggleSuccessMessage(true)
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
                        <p className="product__price error">
                            {product.price.formatted_with_symbol}
                        </p>
                    </div>
                    <div>
                        <HoverRating/>
                        {successMessage?

                            (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                    Item added
                                </Alert>
                            </Snackbar>):null

                        }
                    </div>
                    <button className="product__details-button" onClick={()=>(addToCart())}>
                       
                      
                        add To cart
                    
                    </button>
                   
                </div>
                
                
            </div>
            
        );
    
};
export default ProductItem;