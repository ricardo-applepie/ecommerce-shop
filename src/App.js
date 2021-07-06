
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.svg';
import HamburgerMenu from "../src/components/hamburger-menu/hamburgerMenu"


import './App.css';
import { commerce } from './lib/commerce';
import { Navbar } from "./components/navbar/navbar";
import Productdetails from "./components/product-details/product-details"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "./components/footer/footer"
import Homepage from "./components/homepage/homepage"
import Special from "./pages/special/special";
import Shop from "./pages/shop/shop";
import Cartpage from "./pages/cart/cart";
import Login from "./components/login/login"
import Signup from "./pages/signup/signup";
import Contact from "./pages/contact/contact";
import Checkout from "./pages/checkout/checkout";

import {
  Switch,
  Route,
  Link

} from "react-router-dom";




function App() {

 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())

  },[])

  function fetchProducts() {
    return function fetchProductsthunk(dispatch) {

      commerce.products.list().then((products) => {
      dispatch({ type: "cart/productsfetch", payload: products.data })
      }).catch((error) => {
        console.log('There was an error fetching the products', error);
      });
    }

  }


  const { products} = useSelector((state) => state.cart)


   
  return (
   <div>

       <div className="content__wrapper">
        <nav className="nav-wrapper">
          <Navbar />

        </nav>
        <div>
          <HamburgerMenu />
        </div>
      </div>


      <Switch>
        <Route exact path="/eccommerce-shop">
          <Homepage products={products} />
        </Route>
        <Route path="/product/:id">
          <Productdetails products={products} />
        </Route>
        <Route path="/shop">
          <Shop products={products} />
        </Route>
        <Route path="/services">
          Services
        </Route>
        <Route path="/sale">
          Sale
        </Route>
        <Route path="/accessories">
          accessories
        </Route>
        <Route path="/ricardo-special">
          <Special />
        </Route>
        <Route path="/Shipping">
          Shipping Method
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/cart">
          <Cartpage />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">

          <Login />

        </Route>
        <Route path="/signup">
          <Signup />
        </Route>


      </Switch>

      <div className="footer-wrapper">

        <Footer />
      </div> 
   </div>
  );

}

export default App;
