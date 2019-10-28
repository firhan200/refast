import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Select = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';
    
    //get name
    const inputName = typeof props.name !== 'undefined' ? props.name : '';

    //get id
    const inputId = typeof props.id !== 'undefined' ? props.id : 'text';

    return(
        <div className="custom-form-control">
            <select 
                className={'form-control' + " " + customClassName}
                name={inputName}
                id={inputId}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                >
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
    handleChange : PropTypes.func,
    isValid : PropTypes.bool,
}

export default Select;