import React from 'react';

const ProductCardCategory = (props) => {
    return(
        <div className="product-card-category">
            {props.children}
        </div>
    );
}

export default ProductCardCategory;