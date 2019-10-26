import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ImageCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div className={customClassName}>
        </div>
    );
}

//prop types initialize
ImageCard.propTypes = {
    className: PropTypes.string
}

export default ImageCard;