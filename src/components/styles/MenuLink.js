import React, { useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const MenuLink = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <li style={props.style}>
            { props.children }
        </li>
    );
}

//prop types initialize
MenuLink.propTypes = {
    style : PropTypes.object,
    className: PropTypes.string
}

export default MenuLink;