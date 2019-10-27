import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ProductCardName = (props) => {
    return(
        <div className="product-card-name">
            {props.children}
        </div>
    );
}

//prop types initialize
ProductCardName.propTypes = {
    className: PropTypes.string
}

export default ProductCardName;