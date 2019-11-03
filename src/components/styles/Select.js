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
    const isRequired = typeof props.required !== 'undefined' ? props.required : false;

    //get is valid
    const isValid = typeof props.isValid !== 'undefined' ? (props.isValid ? 'valid ' : 'invalid ') : ' ';

    //get message
    let message = typeof props.message !== 'undefined' ? props.message : '';

    //custom attr
    let attrs = {};
    if(inputId !== ''){
        attrs['id'] = inputId;
    }
    attrs['required'] = isRequired;

    return(
        <div className="custom-form-control">
            { message !== '' ? (
                <div className={"message " + isValid}>
                    { message }
                </div>
            ) : '' }
            <select 
                { ...attrs }
                className={'form-control ' +  isValid + customClassName}
                value={props.value}
                name={inputName}
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
    value : PropTypes.any,
    id : PropTypes.string,
    placeholder : PropTypes.string,
    required : PropTypes.bool,
    handleChange : PropTypes.func,
    isValid : PropTypes.bool,
    message : PropTypes.string,
}

export default Select;