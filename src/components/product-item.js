import React, { Component } from 'react';
import { commerce } from '../lib/commerce';
import HoverRating from '../components/ratings/ratings';

import { stripHtml } from 'string-strip-html';
import '../components/navbar/navbar.css';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  addToCart = () => {
    commerce.cart.add(this.props.product.id, 1);
  };

  render() {
    const { product } = this.props;
    const { result } = stripHtml(product.description);

    return (
      <div className="product__card">
        <Link to={`/product/${product.id}`}>
          <img
            className="product__image"
            src={product.media.source}
            alt={product.name || "product image"}
          />
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
            <HoverRating />
          </div>
          <button className="product__details-button" onClick={this.addToCart}>
            add To cart
          </button>
        </div>
      </div>
    );
  }
}
export default ProductItem;
