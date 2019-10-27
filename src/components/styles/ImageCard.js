import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ImageCard = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get image
    const image = typeof props.image !== 'undefined' ? props.image : '';

    //get image
    const isOverlay = typeof props.isOverlay !== 'undefined' ? props.isOverlay : false;

    return(
        <div className={'custom-image-card card ' + (isOverlay ? 'overlay ' : '') + customClassName}>
            <img src={image} class="card-img-top" alt={""} />
            <div class="card-body">
                {props.children}
            </div>
        </div>
    );
}

//prop types initialize
ImageCard.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    isOverlay: PropTypes.bool,
}

export default ImageCard;