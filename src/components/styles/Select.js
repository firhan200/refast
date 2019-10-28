import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Select = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';
    
    //get name
    const inputName = typeof props.name !== 'undefined' ? props.name : '';

    //get placeholder
    const placeholder = typeof props.placeholder !== 'undefined' ? props.placeholder : '';

    //get id
    const inputId = typeof props.id !== 'undefined' ? props.id : 'text';

    //get required
    const required = typeof props.required !== 'undefined' ? props.required : false;

    return(
        <div className="custom-form-control">
            <select 
                className={'form-control ' + customClassName}
                name={inputName}
                id={inputId}
                required={(required ? "required" : "false")}
                onChange={props.handleChange}
                >
                    { placeholder!=='' ? (
                        <option value="">{ placeholder }</option>
                    ) : '' }
                    {props.children}
            </select>
        </div>
    );
}

//prop types initialize
Select.propTypes = {
    className : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    placeholder : PropTypes.string,
    required : PropTypes.bool,
    handleChange : PropTypes.func,
    isValid : PropTypes.bool,
}

export default Select;