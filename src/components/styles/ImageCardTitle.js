import React from 'react';

const ImageCardTitle = (props) => {
    return(
        <h5 className="card-title">{ props.children }</h5>
    );
}

export default ImageCardTitle;