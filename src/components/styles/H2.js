import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const H2 = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <h2 className={align + ' ' + customClassName}>{ props.children }</h2>
    );
}

//prop types initialize
H2.propTypes = {
    className : PropTypes.string,
    align : PropTypes.string
}

export default H2;