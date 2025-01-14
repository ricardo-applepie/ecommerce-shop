import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/website-logo.jpg';
import carticon from '../../assets/cart-icon.png';
import Button from '../button/button';

export const Navbar = (props) => {
  return (
    <div className="navbar__inner-wrapper content__wrapper-width mobile-container">
      <div className="navbar__left-wrapper">
        <div className="navbar__left-logo">
          <Link className="navbar__center_item-link" to="/">
            <img alt="default alt text"src={logo} />
          </Link>
        </div>
      </div>

      <div className="navbar__center-wrapper">
        <ul className="navbar__center-list">
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/ricardo-special">
              {' '}
              Special
            </Link>
          </li>
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/login">
              {' '}
              Login
            </Link>
          </li>
          <li className="navbar__center_item">
            <Link className="navbar__center_item-link" to="/SignUp">
              {' '}
              SignUp
            </Link>
          </li>
        </ul>
      </div>

      <div id="right" className="navbar__right-wrapper">
        <span>
          <img alt="default alt text"src={carticon} />
        </span>
        <div className="shopping-items">
          <div className=" shopping-items-max-height">
            {props.total &&
              props.total.subtotal &&
              props.total.line_items.map(function (productItem) {
                return (
                  <div>
                    <div className="shopping-items__inner-wrapper">
                      <div class="mini-cart-image-container">
                        <div>
                          <img alt="default alt text"src={productItem.media.source} />
                        </div>
                      </div>

                      <div class="mini-cart-product-content">
                        <div class="mini-cart-product-content__wrapper">
                          <div className="cart-atribute">
                            {productItem.name}
                          </div>
                          <div className="cart-atribute">
                            <b>Price :</b>{' '}
                            {productItem.price.formatted_with_symbol}
                          </div>
                          <div className="cart-atribute">
                            <b>quantity :</b> {productItem.quantity}
                          </div>
                          <div className="cart-atribute">
                            <span>
                              {' '}
                              <b>Total-items :</b>{' '}
                            </span>{' '}
                            <span>
                              {props.total &&
                                props.total.subtotal &&
                                props.total.total_unique_items}
                            </span>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="total_sum-in-cart">
            <span>
              <b>GESAMT :</b>
            </span>
            <span className="total-amount">
              {props.total &&
                props.total.subtotal &&
                props.total.subtotal.formatted_with_code}
            </span>
          </div>
          <div className="button mini-cart-link-checkout">
            <Link className="navbar__center_item-link" to="/cart">
              <Button>Kasse</Button>
            </Link>

            <Link className="navbar__center_item-link" to="/checkout">
              <Button>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
