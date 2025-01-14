import React, { Component } from 'react';
import './App.css';
import { commerce } from './lib/commerce';
import { Navbar } from './components/navbar/navbar';
import Productdetails from './components/product-details/product-details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/footer/footer';
import Homepage from './components/homepage/homepage';
import Special from './pages/special/special';
import Shop from './pages/shop/shop';
import Cartpage from './pages/cart/cart';
import Login from './components/login/login';
import Signup from './pages/signup/signup';
import Contact from './pages/contact/contact';
import Checkout from './pages/checkout/checkout';
import { Switch, Route  } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: [],
    };
  }

  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data });
        console.log(this.state.products);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  }
  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart });
        console.log(this.state.cart);
      })
      .catch((error) => {
        console.error('There was an error fetching the cart', error);
      });
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="content__wrapper">
          <nav className="nav-wrapper">
            <Navbar total={this.state.cart} />
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Homepage products={products} />
          </Route>
          <Route path="/product/:id">
            <Productdetails products={products} />
          </Route>
          <Route path="/shop">
            <Shop products={products} />
          </Route>
          <Route path="/services">Services</Route>
          <Route path="/sale">Sale</Route>
          <Route path="/accessories">accessories</Route>
          <Route path="/ricardo-special">
            <Special />
          </Route>
          <Route path="/Shipping">Shipping</Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">About</Route>
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
}

export default App;
