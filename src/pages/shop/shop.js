import React from "react";
import ProductsList from "../../components/ProductsList";
import house from "../../assets/1200px-Shop.svg.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination'
import { Link} from "react-router-dom";
function Shop(props) {
    return(
        <div>
            <div className="notification-bar content__wrapper-width ">
                            <div className="notification-bar-left">
                                <span>Download our App</span>
                                <span>And get a free T-shirt</span>
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
       
        <div className="content__wrapper-width">
     
        
        <div>
    
            <div className="urlaubsshop">
                <div className="urlaubsshop-left">
                    <h1>URLAUBSSHOP</h1>
                    <p>
                        Mach deinen Urlaub komplett mit der boohooMAN Auswahl an Herrenmode für den Urlaub. Ob Strand oder Bar - unser Urlaubs-Shop bietet alle Must-Haves für jedes Reiseziel. Wähle aus Hunderten von brandneuen Stilen, darunter Oversized-T-Shirts, Muscle-Fit-Shirts, bedruckte Shorts, Sonnenbrillen, Herrenschmuck und vieles mehr.
                    </p>
                </div>
                       
                <div className="urlaubsshop-right">
                     <div className="urlaubsshop-right-img">
                            <img src={house} />
                    </div>
                   
                </div>
                     
            </div>


            <div>
                <ProductsList products={props.products} />
            </div>
           
        </div>
        </div>
        </div>
    )
}
export default Shop ;