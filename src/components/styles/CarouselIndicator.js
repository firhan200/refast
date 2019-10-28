import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const CarouselIndicator = (props) => {
    //get array of item
    const items = typeof props.items !== 'undefined' ? props.items : [];

    return(
        <ol class="carousel-indicators">
            { items.map((item, index) => (
                <li data-target="#carouselExampleCaptions" data-slide-to={index} className={index===0 ? 'active' : ''}></li>
            )) }
        </ol>
    );
}

//prop types initialize
CarouselCaption.propTypes = {
    items : PropTypes.array
}


export default CarouselIndicator;