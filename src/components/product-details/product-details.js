import React, { Component } from 'react';

import { commerce } from '../../lib/commerce';
import Button from '../button/button';
import thanksgif from '../../assets/thanksanimation.gif';
import { withRouter } from 'react-router';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './product-details.css';

class Productdetails extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      productInformation: '',
      categories: [],
    };
    this.addItemtoCart = this.addItemtoCart.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });

    commerce.products
      .retrieve(id)
      .then((product) => this.setState({ productInformation: product }));
  }
  addItemtoCart(prod) {
    commerce.cart.add(prod.id, 1).then((response) => console.log(response));
  }
  render() {
    const productD = this.state;

    return (
      <div className="content__wrapper-width">
        <div className="product__detail ">
          <div className="product__detail-image">
            <img
              src={
                productD.productInformation.media &&
                productD.productInformation.media.source
              }
            />
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
            <h3>
              {productD.productInformation.name
                ? productD.productInformation.name
                : 0}
            </h3>
            <h1>
              {productD.productInformation.name
                ? productD.productInformation.price.formatted_with_symbol
                : 0}
            </h1>
            <p>
              {productD.productInformation
                ? productD.productInformation.description
                : ''}
            </p>

            <div className="product__detail-description-btns">
              <div
                onClick={() => this.addItemtoCart(productD.productInformation)}
              >
                <Button>add</Button>
              </div>
              <FavoriteBorderIcon />
            </div>
            <div>
              <div>
                <div className="">
                  <div className="js-global-accordion-header">
                    <h1>STYLE NOTES</h1>
                  </div>
                  <div className="js-global-accordion-description">
                    <p>
                      T-Shirts und Tank Tops gehören in jeden
                      Herren-Kleiderschrank. In dieser Saison traut sich das
                    </p>
                  </div>
                </div>

                <div>
                  <div className="js-global-accordion-header">
                    <h1>Liferand</h1>
                  </div>
                  <div className="js-global-accordion-description">
                    <p>
                      T-Shirts und Tank Tops gehören in jeden
                      Herren-Kleiderschrank. In dieser Saison traut sich das
                      Dream Team der
                    </p>
                  </div>
                </div>
                <div>
                  <div className="js-global-accordion-header">
                    <h1>Default details</h1>
                  </div>
                  <div className="js-global-accordion-description">
                    <p>
                      T-Shirts und Tank Tops gehören in jeden
                      Herren-Kleiderschrank. In dieser Saison traut sich
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-detail-gif">
          <img src={thanksgif} />
        </div>
      </div>
    );
  }
}
export default withRouter(Productdetails);
