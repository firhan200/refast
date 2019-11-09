import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const H5 = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <h5 style={props.style} className={'h5' +align + ' ' + customClassName}>{ props.children }</h5>
    );
}

//prop types initialize
H5.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    align : PropTypes.string
}

export default H5;