import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer__inner-wrapper">
      <div className="footer__left">
        <div className="footer__left-logo">

        </div>
      </div>
      <div className="footer__center">
        <ul className="footer__center-wrapper">
          <li className="footer__center_item">
            <Link className="navbar__center_item-link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__center_item">
            <Link className="navbar__center_item-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="footer__center_item">
            <Link className="navbar__center_item-link" to="/special">
              Special
            </Link>
          </li>
          <li className="footer__center_item">
            <Link className="navbar__center_item-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="footer__center_item">
            <Link className="navbar__center_item-link" to="/cart">
              cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__right">
      </div>
    </div>
  );
};
