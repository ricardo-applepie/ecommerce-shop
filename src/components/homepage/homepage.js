import { React } from 'react';

import Contactform from '../Form/form';
import Carouselslider from '../caroussel/carousel';
import Button from '../button/button';
import ProductsList from '../ProductsList';

function Homepage(props) {
  return (
    <div>
      <div className="content__wrapper">
        <div></div>

        <div className="content__wrapper-width mobile-container">
          <div>
            <div className="notification-bar ">
              <div className="notification-bar-left">
                <span>Download our App</span>
                <span> And get a free T-shirt</span>
              </div>
              <div className="notification-bar-center">
                <span>WE offering jobs to best Js Devs </span>
                <span>50% RABATT AUF ALLES!*</span>
              </div>
              <div className="notification-bar-right">
                <span>Special Offers only for customers</span>
                <span>Be wise 50% off this summer</span>
              </div>
            </div>
            <Carouselslider />
          </div>
          <div className="content__inner-wrapper">
            <h1 className="section-heading">SPECIAL OFFER</h1>

            <div class="special-products">
              <div className="special-products-left">
                <img alt="default alt text" src="https://media.boohoo.com/i/boohooamplience/100621_SHORTS_LB5_DESK?$homesplash_desktop_third_1x$" />
                <div className=" section-btn">
                  <Button>Shorts from 20 $</Button>
                </div>
              </div>
              <div className="special-products-right">
                <img alt="default alt text" src="https://media.boohoo.com/i/boohooamplience/100621_COORDS_LB4_DESK?$homesplash_desktop_third_1x$" />
                <div className=" section-btn">
                  <Button>Jumpers from 20$</Button>
                </div>
              </div>
            </div>
            <div class="products__wrapper">
              <h1 className="section-heading">OUR PRODUCTS</h1>

              <div>
                <ProductsList products={props.products} />
              </div>
            </div>
            <div class="buy_now-section">
              <img
                alt="buy now"
                className="buy_now-section-image"
                src="https://media.boohoo.com/i/boohooamplience/040621_PRIDE_LB_DESK_DE"
              />
              <div className="buy_now-section-btn section-btn">
                <Button>Shop Now</Button>
              </div>
            </div>

            <div class="special-products">
              <div className="special-products-left">
                <img alt="default alt text"src="https://media.boohoo.com/i/boohooamplience/100621_SHORTS_LB5_DESK?$homesplash_desktop_third_1x$" />
                <div className=" section-btn">
                  <Button>Shorts from 20 $</Button>
                </div>
              </div>
              <div className="special-products-right">
                <img alt="default alt text"src="https://media.boohoo.com/i/boohooamplience/100621_COORDS_LB4_DESK?$homesplash_desktop_third_1x$" />
                <div className=" section-btn">
                  <Button>Jumpers from 20$</Button>
                </div>
              </div>
            </div>

            <div className="contact-form__section-wrapper">
              <h1 className="section-heading">CONTACT US NOW</h1>

              <div className="contact-form__section section-heading">
                <div className="contact-form__section-left">
                  <div>
                    <img alt="default alt text"src="http://www.rayholidaysbd.com/wp-content/uploads/2019/04/contact-us.png" />
                  </div>
                  <p>
                    Please Fill the form ,We will be in touch with you , Thanks
                    for your time{' '}
                  </p>
                </div>
                <div className="contact-form__section-right">
                  <Contactform />
                </div>
              </div>
              {/* <Getcartitems /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
