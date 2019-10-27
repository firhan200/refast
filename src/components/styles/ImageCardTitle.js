import React from 'react';

const ImageCardTitle = (props) => {
    return(
        <h5 class="card-title">{ props.children }</h5>
    );
}

export default ImageCardTitle;