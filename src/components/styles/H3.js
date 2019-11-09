import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const H3 = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <h3 style={props.style} className={'h3' +align + ' ' + customClassName}>{ props.children }</h3>
    );
}

//prop types initialize
H3.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    align : PropTypes.string
}

export default H3;