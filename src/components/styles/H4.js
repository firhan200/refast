import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const H4 = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <h4 style={props.style} className={'h4' +align + ' ' + customClassName}>{ props.children }</h4>
    );
}

//prop types initialize
H4.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    align : PropTypes.string
}

export default H4;