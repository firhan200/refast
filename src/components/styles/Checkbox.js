import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Checkbox = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get label
    const label = typeof props.label !== 'undefined' ? props.label : '';

    //get is circular
    const isCircular = typeof props.isCircular !== 'undefined' ? props.isCircular : false;

    //get checked
    const isChecked = typeof props.isChecked !== 'undefined' ? props.isChecked : false;

    return(
        <span className={"custom-checkbox " + customClassName}>
            <label className="checkbox-label">
                <input type="checkbox" 
                    onChange={props.handleChange}
                    { ...{ checked : isChecked } }
                    />
                <span className={"checkbox-custom " + (isCircular ? 'circular' : 'rectangular')}></span>
            </label>
            <span className="text-label">
                { label }
            </span>
        </span>
    );
}

//prop types initialize
Checkbox.propTypes = {
    className : PropTypes.string,
    handleChange: PropTypes.func,
    label: PropTypes.string,
    isChecked : PropTypes.bool,
    isCircular: PropTypes.bool
}


export default Checkbox;