import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Checkbox = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get custom class
    const isCircular = typeof props.isCircular !== 'undefined' ? props.isCircular : false;

    return(
        <span className={"custom-checkbox " + customClassName}>
            <label className="checkbox-label">
                <input type="checkbox" />
                <span className={"checkbox-custom " + (isCircular ? 'circular' : 'rectangular')}></span>
            </label>
        </span>
    );
}

//prop types initialize
Checkbox.propTypes = {
    className : PropTypes.string,
    isCircular: PropTypes.bool
}


export default Checkbox;