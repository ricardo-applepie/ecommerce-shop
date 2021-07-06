import React, {  useEffect } from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import { useSelector, useDispatch } from 'react-redux'
import { commerce } from '../../lib/commerce';
import { fetchCartItems } from "../../components/cartItems/cartItems";


import Snackbar from '@material-ui/core/Snackbar';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
function Cartpage({total}) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        // Update the document title using the browser API
      function fetchCartItemsTotal( ) {

          return function name(dispatch) {

              commerce.cart.contents().then((items) => {
                  
                  dispatch({ type: "cart/increment", payload: items })
                   
            });
             
             
          }
        }
        dispatch(fetchCartItemsTotal())

        });

    function removeItemFromCart(cartItemId){
        return function dispatchRemoveItemFromCart(dispatch){
            commerce.cart.remove(cartItemId.id).then((response) =>  {

                dispatch({ type: "cart/removeitem" });
                dispatch(fetchCartItems())

                setOpen(true);

            });

        }
    }
    const counter = useSelector((state) => state.cart)
    return(
        <div className="content__wrapper-width cart-items-div">
          <div>
              <h1 className="cart-title">Cart</h1>
          </div>

            {counter.cartItems.length <= 0 ? (<p className="error error-message">NO ITems in Cart ,please add Items we have much in sale right now </p>): counter.cartItems.map(function (cartItem) {
                return (
                    <div>
                       
                        <div className="cart-items-wrapper ">
                            <div className="cart-image">

                                <img src={cartItem.media.source} />
                            </div>


                            <div className="cart-items-details">
                                <span className="cart-items-details-item">   {cartItem.name}</span>
                                <span className="cart-items-details-item">  50% RABATT AUF ALLES*</span>
                                <span className="cart-items-details-item">  Colour: ECRU</span>
                               
                                <div className="cartEdit">
                                    <div onClick={() => dispatch(removeItemFromCart(cartItem))}>
                                        <DeleteIcon />
                                        <span>
                                            Delete

                                        </span>
                                        
                                    </div>
                                 
                                </div>

                            </div>
                            <div>
                                <div className="cart-item-input__wrapper">
                                    <p className="">Qualtity</p>

                                    <input className="cart-item-input" type="input" value={cartItem.quantity}/>
                                   
                                </div>
                            </div>
                            <div>
                                <p className="">price </p>

                                <span className="total-amount">{cartItem.price.formatted_with_code}</span>
                            </div>
                          
                        </div>
                    </div>
                )

            })}
            

        
        {
            counter.cartItems.length<=0? "":

                    <div className="cart-total-wrapper">
                        <div className="cart-items-icons">


                            <div className="cart-items__icon">
                                <img src="https://www.boohooman.com/on/demandware.static/-/Library-Sites-boohooman-content-global/default/dw5223fcd6/images/payment-method-icons/master-card.png" />
                            </div>
                            <div className="cart-items__icon">
                                <img src="https://www.boohooman.com/on/demandware.static/-/Library-Sites-boohooman-content-global/default/dw5223fcd6/images/payment-method-icons/master-card.png" />
                            </div>
                            <div className="cart-items__icon">
                                <img src="https://www.boohooman.com/on/demandware.static/-/Library-Sites-boohooman-content-global/default/dw5223fcd6/images/payment-method-icons/master-card.png" />
                            </div>
                        </div>
                        <div className="cart-details-total"> 
                            <p>Lieferinformationen (Du kannst deine Lieferoption später im Bestellvorgang auswählen.)</p>
                            <div>
                                <span>Deutschland Standardlieferung	: <span className="total-amount">{total} </span></span>
                            
                                <span> </span>


                            </div>
                            <div>
                                <Link to="/checkout">

                                    <Button>
                                        Checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
        }
        
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                   item deleted
                </Alert>
            </Snackbar>
       </div>
    )
}

export default Cartpage;