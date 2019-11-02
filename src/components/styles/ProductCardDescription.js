import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ProductCardDescription = (props) => {
    let maxLength = 100;
    let description = '';

    //get maxLength
    maxLength = typeof props.maxLength !== 'undefined' ? props.maxLength : maxLength;

    //get description
    if(typeof props.children !== 'undefined'){
        description = props.children.length > maxLength ? props.children.slice(0, maxLength)+'...' : props.children;
    }

    return(
        <p className="product-card-description">{ description }</p>
    );
}

//prop types initialize
ProductCardDescription.propTypes = {
    maxLength: PropTypes.number
}

export default ProductCardDescription;