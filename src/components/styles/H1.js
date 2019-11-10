import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const H1 = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get align
    const align = typeof props.align !== 'undefined' ? props.align : 'left';

    return(
        <h1 style={props.style} className={'h1 ' +align + ' ' + customClassName}>{ props.children }</h1>
    );
}

//prop types initialize
H1.propTypes = {
    style : PropTypes.object,
    className : PropTypes.string,
    align : PropTypes.string
}

export default H1;