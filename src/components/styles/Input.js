import React, { useEffect, useState } from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Input = (props) => {
    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get type
    let inputType = typeof props.type !== 'undefined' ? props.type : 'text';
    const [type, setType] = useState(inputType);
    
    //get name
    const inputName = typeof props.name !== 'undefined' ? props.name : '';

    //get id
    const inputId = typeof props.id !== 'undefined' ? props.id : 'text';

    return(
        <div className="custom-form-control">
            <input 
                className={'form-control' + " " + customClassName}
                type={type}
                name={inputName}
                id={inputId}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                />

            {/* password type */}
            { inputType.toLowerCase() === 'password' ? (
                <div className="icon">
                    <i className={"fa " + (type.toLowerCase()==='password' ? "fa-eye" : "fa-eye-slash") } onClick={() => {
                        inputType = type.toLowerCase()==='password' ? 'text' : 'password';
                        setType(inputType);
                    }}></i>
                </div>
            ) : '' }
        </div>
    );
}

//prop types initialize
Input.propTypes = {
    className : PropTypes.string,
    type : PropTypes.string,
    name : PropTypes.string,
    id : PropTypes.string,
    placeholder : PropTypes.string,
    handleChange : PropTypes.func,
    isValid : PropTypes.bool,
}

export default Input;