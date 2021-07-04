import React, { Component } from 'react';
import ProductItem from './product-item';

class ProductsList extends Component {
    
    render() {
       const add = this.props.SetaddItemstate;
        const { products } = this.props;

        return (
            <div className="products">
                {products.map((product) => (
                    <ProductItem
                        
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        );
    }
}

export default ProductsList;