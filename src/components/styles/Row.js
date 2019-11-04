import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Row = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    return(
        <div className={"row custom-row " + customClassName}>
            { props.children }
        </div>
    );
}

//prop types initialize
Row.propTypes = {
    className: PropTypes.string
}

export default Row;