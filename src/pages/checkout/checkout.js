import React, { useEffect, useState, useHistory } from 'react';
import Contact from "../../components/Form/form"
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { commerce } from '../../lib/commerce';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup';
import Cartpage from "../cart/cart"
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout(props) {
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit } = useForm();
    const [total, setTotal] = useState("");
    const [CheckoutToken, setCheckoutToken] = useState("");
    const [order, setOrder] = useState("")



    function generateCheckoutToken() {
        const { cart } = this.props;
        if (cart.line_items.length) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' })
                .then((token) => {
                //    console.log(token)
                }).catch((error) => {
                    console.log('There was an error in generating a token', error);
                });
        }
    }

    

    function fetchCartItems() {

        return function fetchcartthunk(dispatch) {
            commerce.cart.retrieve().then((cart) => {
                setTotal(cart.subtotal.formatted_with_code)
                commerce.checkout.generateToken(cart.id, { type: 'cart' })
                    .then((token) => {
                        setCheckoutToken(token)
                    }).catch((error) => {
                        console.log('There was an error in generating a token', error);
                    });
            });

        }
    }
    useEffect(() => {
        // Update the document title using the browser API
       
        dispatch(fetchCartItems())

    },[]);


    function refreshCart() {
        commerce.cart.refresh().then((newCart) => {
          
        }).catch((error) => {
            console.log('There was an error refreshing your cart', error);
        });
    };

// handle checkout
    function handleCaptureCheckout(checkoutTokenId, newOrder) {

      
        commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
            // Save the order into state
            console.log(order)
            // Clear the cart
            refreshCart();
            // Send the user to the receipt 
            props.history.push('/confirmation');
            // Store the order in session storage so we can show it again if the
            // user refreshes the page!
            window.sessionStorage.setItem('order_receipt', JSON.stringify(order));
        }).catch((error) => {
            console.log('There was an error confirming your order', error);
        });
    };

    const onSubmit = (data) => {
        
        let checkouttokenId = CheckoutToken.id
      
        handleCaptureCheckout(checkouttokenId,data)
        setOrder(data)
        alert(`Thanks ${data.name} this is just a test Website`)
       
 
    };

  const counter = useSelector((state) => state.cart)
    return (
        <div className="content__wrapper-width checkout-wrapper">
            <div className="">   
            <div className="text-center">
                <h1>
                        <b>EINE LIEFERADRESSE EINGEBEN</b>
                </h1>
                   
            </div>
            <div className="checkout-container">

          
                    <div className="checkout-form">
               
                    <Form onSubmit={handleSubmit(onSubmit)}>
                 
 
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control {...register("firstName")} type="text" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control {...register("LastNAme")} type="text" placeholder="Last Name" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("Emailaddress")} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <h1>Shipping Details</h1>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control {...register("shippingOwnerName")} type="text" placeholder="Enter FullName" />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control {...register("name")} type="text" placeholder="Full Name" />

                        </Form.Group>

                            <Form.Group  controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                            <Form.Control  {...register("City")} />
                            </Form.Group>
                        <Form.Group controlId="formGridCity">
                            <Form.Label>Country</Form.Label>
                            <Form.Control  {...register("Country")} />
                        </Form.Group>
                        <Form.Group controlId="formGridCity">
                            <Form.Label>State</Form.Label>
                            <Form.Control   {...register("State")}/>
                        </Form.Group>

                       
                        <button type="submit">
                           Order Now 
                        </button>
                    </Form>
          
                   
                </div>
                    <div className="checkout-cart_items">
                    <Cartpage total={total} />
                </div>
           
            </div>
            </div>
        </div>
    )
}

export default Checkout;