import React from 'react';

const ImageCardSubTitle = (props) => {
    return(
        <h5 className="card-subtitle">{ props.children }</h5>
    );
}

export default ImageCardSubTitle;