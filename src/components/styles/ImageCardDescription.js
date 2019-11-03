import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const ImageCardDescription = (props) => {
    let maxLength = 100;
    let description = '';

    //get maxLength
    maxLength = typeof props.maxLength !== 'undefined' ? props.maxLength : maxLength;

    //get description
    if(typeof props.children !== 'undefined'){
        description = props.children.length > maxLength ? props.children.slice(0, maxLength)+'...' : props.children;
    }

    return(
        <p className="card-text">{ description }</p>
    );
}

//prop types initialize
ImageCardDescription.propTypes = {
    maxLength: PropTypes.number
}

export default ImageCardDescription;