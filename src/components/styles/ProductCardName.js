import React from 'react';

const ProductCardName = (props) => {
    return(
        <div className="product-card-name">
            {props.children}
        </div>
    );
}

export default ProductCardName;