import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ProductCardImage = (props) => {
    //get custom class
    const image = typeof props.image !== 'undefined' ? props.image : '';

    return(
        <div className={'product-card-image'}>
            <img src={image} className="img-fluid" alt={""}/>
        </div>
    );
}

//prop types initialize
ProductCardImage.propTypes = {
    image: PropTypes.string
}

export default ProductCardImage;