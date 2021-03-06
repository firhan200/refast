import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Container = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div style={props.style} className={"container custom-container " + customClassName}>
            { props.children }
        </div>
    );
}

//prop types initialize
Container.propTypes = {
    style : PropTypes.object,
    className: PropTypes.string
}

export default Container;