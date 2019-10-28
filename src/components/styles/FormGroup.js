import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const FormGroup = (props) => {
    //get custom class
    const isRow = typeof props.isRow !== 'undefined' ? props.isRow : false;

    return(
        <div className={'form-group'+ (isRow ? ' row' : '')}>
            { props.children }
        </div>
    );
}

//prop types initialize
FormGroup.propTypes = {
    isRow : PropTypes.bool
}

export default FormGroup;