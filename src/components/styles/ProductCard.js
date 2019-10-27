import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ProductCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div className={'custom-product-card ' + customClassName}>
            {props.children}
        </div>
    );
}

//prop types initialize
ProductCard.propTypes = {
    className: PropTypes.string
}

export default ProductCard;